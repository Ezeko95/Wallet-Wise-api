import { User as UserModel } from "../models/User";
import { Admin as AdminModel } from "../models/Admin";
import { Balance as BalanceModel } from "../models/Balance";
import * as bcrypt from "bcrypt"; // para hashear passwords
import * as jwt from "jsonwebtoken"; // token generator
import config from "../../lib/config";
import { Op } from "sequelize";

// interface para el model del User
export interface IUser extends UserModel {
  name: string;
  email: string;
  picture: string;
  password: string;
  premium: boolean;
  active: boolean;
  suspensionEndDate: Date;
  balance: BalanceModel;
}
export interface IAdmin extends AdminModel {
  name: string;
  password: string;
}

/////////////////// Registro Admin ///////////////////////

export const createAdmin = async (admin: IAdmin) => {
  try {
    admin.password = bcrypt.hashSync(admin.password, 10);
    const newAdmin = await AdminModel.create(admin);
    return newAdmin;
  } catch (error) {
    throw Error("Error in the creation of Admin");
  }
};

//////////////// Login admin /////////////////////////

export const loginAdmin = async (name: string, password: string) => {
  const admin = await AdminModel.findOne({ where: { name } });
  if (!admin) {
    throw new Error("Please provide Admin credentials");
  }
  const passwordMatch = await bcrypt.compare(password, admin.password);
  if (!passwordMatch) throw new Error("Invalid password. Please try again");

  const accessToken = jwt.sign({ admin, name: admin.name }, config.secret, {
    expiresIn: "3h",
  });
  return accessToken;
};

////////// Cambiar usuario a premium //////////////////

export const updateUser = async (id: number) => {
  const user = await UserModel.findByPk(id);
  if (!user) {
    throw new Error("No user found");
  }
  const toggle = user.premium;
  UserModel.update({ premium: !toggle }, { where: { id } });

  return `the suscription has changed from ${toggle} succesfully to ${!toggle}`;
};

export const userSearch = async (name: string) => {
  return await UserModel.findAll({
    where: { name: { [Op.like]: `${name}` } },
  });
};

export const banUser = async (id: number) => {
  const user = await UserModel.findByPk(id);
  if (!user) {
    throw new Error("No user found");
  }
  const toggle = user.active;
  UserModel.update({ active: !toggle }, { where: { id } });

  return `the user has changed from ${toggle} succesfully to ${!toggle}`;
};

export const suspendUser = async (id: number, date: Date) => {
  const user = await UserModel.findByPk(id);
  if (!user) {
    throw new Error("User not found");
  }
  const toggle = user.suspenseEndDate;
  await UserModel.update({ suspenseEndDate: date }, { where: { id } });

  return `The user has changed from ${toggle} to ${date} successfully`;
};
