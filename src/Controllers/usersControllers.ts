import { User as UserModel } from '../models/User';
import { Balance as BalanceModel} from '../models/Balance';
import { sequelize } from '../db';
interface IUser extends UserModel {
  name: string;
  lastName: string;
  email: string;
  password: string;
  premium: boolean;
  balance: BalanceModel
}

export const createUser = async (user: IUser, balanceData: any) => {
  const transaction = await sequelize.transaction();

  try {
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
  const users = await UserModel.findAll({include: [{ model: BalanceModel,
    attributes: ["total"]
}]});
  return users;
};

export const getOneUser = async (id: number) => {
  const user = await UserModel.findOne({ 
      where: { id: id},
      include: [{ model: BalanceModel,
                  attributes: ["total"]
      }]
  })
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
