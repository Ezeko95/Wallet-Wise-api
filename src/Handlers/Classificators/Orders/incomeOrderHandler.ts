import { Request, Response } from 'express';
import { incomeAlphaOrder, incomeAmountOrder, incomeDateOrder } from '../../../Controllers/Classificators/Orders/incomeOrderController';

export interface IAlpha {
    alpha: string;
}

export const getIncomeAlphaOrder = async (req: Request, res: Response) => {
    const alpha: IAlpha = req.body;
    const { id } = req.params;
    try {
        const order = await incomeAlphaOrder(alpha, +id);

        if(order?.length === 0) throw Error('Empty order');

        res.status(200).send(order);
    } catch (error) {
        console.error('Error ocurred while order expenses...', error);
        res.status(400).json({
        message: 'Failed to order expenses alphabetically. Try again later...',
      });
    }
};

export interface IAmount {
  amount: string;
}

export const getIncomeAmountOrder = async (req: Request, res: Response) => {
  const amount: IAmount = req.body;
  const { id } = req.params;
  try {
    const order = await incomeAmountOrder(amount, +id);
    
    if(order?.length === 0) throw Error('Empty order');

    res.status(200).send(order);
  } catch (error) {
    console.error('Error ocurred while order incomes...', error);
    res.status(400).json({
      message: 'Failed to order incomes for amount. Try again later...',
    });
  }
};

export interface IDate {
  date: string;
}

export const getIncomeDateOrder = async (req: Request, res: Response) => {
  const date: IDate = req.body;
    const { id } = req.params;
    try {
      const order = await incomeDateOrder(date, +id);
      
      if(order?.length === 0) throw Error('Empty order');
  
      res.status(200).send(order);
    } catch (error) {
      console.error('Error ocurred while order incomes...', error);
      res.status(400).json({
        message: 'Failed to order incomes by date. Try again later...',
      });
    }
    
};

