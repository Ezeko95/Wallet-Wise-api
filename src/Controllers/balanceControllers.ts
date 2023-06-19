import { Expense as ExpenseModel } from '../models/Expense';
import { Balance as BalanceModel } from '../models/Balance';
import {Income as IncomeModel} from '../models/Income';
import { Account as AccountModel } from '../models/Account';

export const getAllMovements = async (id: number) => {

  const finalBalance = await BalanceModel.findOne({
    where: { id: id},
    include:[ {
      model: AccountModel,
      include: [ExpenseModel, IncomeModel]
    }]
  })

  return finalBalance;

};



