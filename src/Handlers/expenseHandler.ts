import { Request, Response } from 'express';
import {
  createExpense,
  getAllExpenses,
} from '../Controllers/expenseControllers';

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

export const postExpense = async (req: Request, res: Response) => {
  const expense = req.body;
  try {
    const newExpense = await createExpense(expense);
    res.status(200).send(newExpense);
  } catch (error) {
    console.error('Error ocurred while creating expense', error);
    res
      .status(400)
      .json({ message: 'Failed to create expense. Try again later...' });
  }
};
