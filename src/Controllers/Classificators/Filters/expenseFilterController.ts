import { Expense as ExpenseModel } from '../../../models/Expense';
import { Account as AccountModel } from '../../../models/Account';
import { getAllIdExpense } from '../../expenseControllers';
import {
  IAccount,
  ICategory,
  IDate,
} from '../../../Handlers/Classificators/Filters/expenseFilterHandler';

export const expenseDateFilter = async (date: IDate, id: number) => {
  
  const arrayAccount = await getAllIdExpense(id);
  
  const expenseFilter = arrayAccount?.map((e) =>
    e.expense.filter(
      (e) => e.createdAt.toISOString().split('T')[0] === date.date
    )
  );
  
  const newArray = []

  for (const element in expenseFilter) {
    if (expenseFilter[element].length > 0)
      newArray.push(expenseFilter[element]);
  }

  if (!newArray.length) return 'There is no expense on that date';
  return newArray;
};

export const expenseAccountFilter = async (account: IAccount, id: number) => {
  const expenseAccount= await AccountModel.findOne({
    where: { userId: id, name: account.account},
    include:[ExpenseModel]
  });
   return expenseAccount;
};

export const  expenseCategoryFilter = async( category: ICategory, id:number)=>{
  const arrayAccount = await getAllIdExpense(id);
  
  const expenseFilter = arrayAccount?.map((e) =>
    e.expense.filter(
      (e) => e.category === category.category
    )
  );
  
  const newArray = []

  for (const element in expenseFilter) {
    if (expenseFilter[element].length > 0)
      newArray.push(expenseFilter[element]);
  }

  if (!newArray.length) return 'There is no expense on that category';
  return newArray;
}


