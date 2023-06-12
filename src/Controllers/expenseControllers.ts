import { Expense as ExpenseModel } from '../models/Expense';

interface IExpense extends ExpenseModel {
  description: string;
  amount: number;
  paymentMethod: string;
  category: string;
}

export const createExpense = async (expense: IExpense) => {
  const newExpense = await ExpenseModel.create(expense);
  return newExpense;
};

export const getAllExpenses = async () => {
  const allExpenses = await ExpenseModel.findAll();
  return allExpenses;
};
