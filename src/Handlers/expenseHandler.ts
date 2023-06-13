import { Request, Response } from 'express';
import {
  createExpense,
  getAllExpenses
} from '../Controllers/expenseControllers';
import { Expense as ExpenseModel } from '../models/Expense';


export interface IExpense extends ExpenseModel {
  description: string;
  amount: number;
  paymentMethod: string;
  category: string;
}

export const postExpense = async (req: Request, res: Response) => {
  const expense = req.body;
  const { id }= req.params;
  
  console.log(id)
  
  
  try{

    const infoExpense: IExpense={
      ...expense,
      balanceId: +id
    }
    console.log(infoExpense.balanceId)
    console.log(id)
    const newExpense = await createExpense(infoExpense);
    res.status(200).send(newExpense);
  } catch (error) {
    console.error('Error ocurred while creating expense', error);
    res
      .status(400)
      .json({ message: 'Failed to create expense. Try again later...' });
  }
};






















export const getExpenses = async (req: Request, res: Response) => {
  try {
    const response = await getAllExpenses();
    res.status(200).send(response);
  } catch (error) {
    console.error('Error ocurred while fetching expenses...', error);
    res
      .status(400)
      .json({ message: 'Failed to fetch expenses. Try again later...' });
  }
};

