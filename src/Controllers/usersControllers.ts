import { User as UserModel } from '../models/User';

interface IUser extends UserModel {
  name: string;
  lastName: string;
  email: string;
  password: string;
  premium: boolean;
}
export const createUser = (user: IUser) => {
  const newUser = UserModel.create(user);
  return newUser;
};

export const getAllUsers = async () => {
  const users = await UserModel.findAll();
  return users;
};

export const getOneUser = async (id: number) => {
  const user = await UserModel.findByPk(id);
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

  return `User has changed from ${toggle} succesfully`;
};
