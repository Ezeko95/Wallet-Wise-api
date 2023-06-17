import { User as UserModel } from '../models/User';
import { Balance as BalanceModel } from '../models/Balance';
import { sequelize } from '../db';
import * as bcrypt from "bcrypt";

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
    const hashedPassword = bcrypt.hashSync(user.password, 10); // hasheo de password
    user.password = hashedPassword;

    const newUser = await UserModel.create(user, { transaction });

    balanceData.userId = newUser.id;

    const balance = await BalanceModel.create(balanceData, { transaction });

    await transaction.commit();

    return { newUser, balance };
  } catch (error) {
    await transaction.rollback();

    throw Error('error in the creation');
  }
};

export const getAllUsers = async () => {
  const users = await UserModel.findAll({
    include: [{ model: BalanceModel, attributes: ['total'] }],
  });
  return users;
};

export const getOneUser = async (id: number) => {
  const user = await UserModel.findOne({
    where: { id: id },
    include: [{ model: BalanceModel, attributes: ['total'] }],
  });
  if (!user) throw new Error('No user found');

  return user;
};

export const updateUser = async (id: number) => {
  const user = await UserModel.findByPk(id);
  if (!user) {
    throw new Error('No user found');
  }
  const toggle = user.premium;
  UserModel.update({ premium: !toggle }, { where: { id } });

  return `the suscription has changed from ${toggle} succesfully to ${!toggle}`;
};
