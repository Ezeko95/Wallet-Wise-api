import { Request, Response } from 'express';
import {
  expenseAccountFilter,
  expenseDateFilter,
  expenseCategoryFilter
} from '../../../Controllers/Classificators/Filters/expenseFilterController';

export interface IDate {
  date: string;
}

export const getExpenseDateFilter = async (req: Request, res: Response) => {
  const date: IDate = req.body;
  const { id } = req.params;
  try {
    const filter = await expenseDateFilter(date, +id);
    
    if(filter?.length === 0) throw Error('Empty filter');

    res.status(200).send(filter);
  } catch (error) {
    console.error('Error ocurred while filter expenses...', error);
    res.status(400).json({
      message: 'Failed to filter expenses by date. Try again later...',
    });
  }
};

export interface IAccount {
  account: string;
}

export const getExpenseAccountFilter = async (req: Request, res: Response) => {
  const account: IAccount = req.body;
  const { id } = req.params;

  try {
    const filter = await expenseAccountFilter(account, +id);

    if(filter?.expense.length === 0) throw Error('Empty filter');

    res.status(200).send(filter);
  } catch (error) {
    console.error('Error ocurred while filter expenses...', error);
    res.status(400).json({
      message: 'Failed to filter expenses by accounts. Try again later...',
    });
  }
};

export interface ICategory {
  category: string;
}


export const getExpenseCategoryFilter = async (req: Request, res: Response) => {
  const category: ICategory = req.body;
  const { id } = req.params;

  try {
    const filter = await expenseCategoryFilter(category, +id);

     if(filter?.length === 0) throw Error('Empty filter');

    res.status(200).send(filter);
  } catch (error) {
    console.error('Error ocurred while filter expenses...', error);
    res.status(400).json({
      message: 'Failed to filter expenses by accounts. Try again later...',
    });
  }
};
