import { User as UserModel } from "../models/User";
import { Balance as BalanceModel } from "../models/Balance";
import { sequelize } from "../db";
import * as bcrypt from "bcrypt";
import * as jwt from "jsonwebtoken";
import config from "../../lib/config";

export interface IUser extends UserModel {
  name: string;
  email: string;
  picture: string;
  password: string;
  premium: boolean;
  balance: BalanceModel;
}

export const createUser = async (user: IUser, balanceData: any) => {
  const transaction = await sequelize.transaction();

  try {
    // Hasheo de password
    const hashedPassword = bcrypt.hashSync(user.password, 10);
    user.password = hashedPassword;

    const newUser = await UserModel.create(user, { transaction });

    balanceData.userId = newUser.id;

    const balance = await BalanceModel.create(balanceData, { transaction });

    await transaction.commit();

    // Generar Token para nuevo usuario
    const accessToken = generateAccessToken(newUser);

    return { newUser, balance, accessToken };
  } catch (error) {
    await transaction.rollback();

    throw Error("error in the creation");
  }
};

const generateAccessToken = (user: IUser) => {
  const accessToken = jwt.sign({ userId: user.email }, config.secret, {
    expiresIn: "1h",
  });

  return accessToken;
};

export const getAllUsers = async () => {
  const users = await UserModel.findAll({
    include: [{ model: BalanceModel, attributes: ["total"] }],
  });
  return users;
};

export const getOneUser = async (id: number) => {
  const user = await UserModel.findOne({
    where: { id: id },
    include: [{ model: BalanceModel, attributes: ["total"] }],
  });
  if (!user) throw new Error("No user found");

  return user;
};

export const updateUser = async (id: number) => {
  const user = await UserModel.findByPk(id);
  if (!user) {
    throw new Error("No user found");
  }
  const toggle = user.premium;
  UserModel.update({ premium: !toggle }, { where: { id } });

  return `the suscription has changed from ${toggle} succesfully to ${!toggle}`;
};

//////// LOGIN //////////

export const loginUser = async (email: string, password: string) => {
  // Busca el mail en la base de datos
  const user = await UserModel.findOne({ where: { email } });
  // Tira error si no encuentra
  if (!user) {
    throw new Error("Please enter a valid username");
  }
  // Chequea que la password y el hash coicidan
  const passwordMatch = await bcrypt.compare(password, user.password);
  // Si no coinciden tira error
  if (!passwordMatch) {
    throw new Error("Invalid password. Please try again");
  }
  // Genera Token y lo retorna al front
  const accessToken = jwt.sign({ user, email: user.email }, config.secret, {
    expiresIn: "1h",
  });
  return accessToken;
};
