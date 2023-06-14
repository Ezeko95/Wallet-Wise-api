import { Expense as ExpenseModel } from '../models/Expense';
import { Balance as BalanceModel } from '../models/Balance';
import {IExpense} from '../Handlers/expenseHandler'

export const createExpense = async (infoExpense: IExpense) => {
  await ExpenseModel.create(infoExpense);

  if(!infoExpense) throw Error('faltan cosas loco')

  const balanceToChange = await BalanceModel.findOne({
    where: { id: infoExpense.balanceId},
    include:[ ExpenseModel]
  
  })
  

  const total = balanceToChange?.total

  if( total !== undefined){
    const newTotal = total - infoExpense.amount
    await BalanceModel.update({ total:  newTotal }, { where: { id: infoExpense.balanceId } });
  }

  const finalBalance = await BalanceModel.findOne({
    where: { id: infoExpense.balanceId},
    include:[ ExpenseModel]
  })
  

  if(!balanceToChange) throw Error('no hay balance')


  return finalBalance;
};
















export const getAllExpenses = async () => {
  const allExpenses = await ExpenseModel.findAll();
  return allExpenses;
};
