import { Request, Response } from 'express';
import { expenseAlphaOrder, expenseAmountOrder, expenseDateOrder } from '../../../Controllers/Classificators/Orders/expenseOrderController';

export interface IAlpha {
    alpha: string;
  }
  
export const getExpenseAlphaOrder = async (req: Request, res: Response) => {
    const alpha: IAlpha = req.body;
    const { id } = req.params;
    try {
      const order = await expenseAlphaOrder(alpha, +id);
      
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

export const getExpenseAmountOrder = async (req: Request, res: Response) => {
  const amount: IAmount = req.body;
    const { id } = req.params;
    try {
      const order = await expenseAmountOrder(amount, +id);
      
      if(order?.length === 0) throw Error('Empty order');
  
      res.status(200).send(order);
    } catch (error) {
      console.error('Error ocurred while order expenses...', error);
      res.status(400).json({
        message: 'Failed to order expenses for amount. Try again later...',
      });
    }
};

export interface IDate {
  date: string;
}

export const getExpenseDateOrder = async (req: Request, res: Response) => {
  const date: IDate = req.body;
    const { id } = req.params;
    try {
      const order = await expenseDateOrder(date, +id);
      
      if(order?.length === 0) throw Error('Empty order');
  
      res.status(200).send(order);
    } catch (error) {
      console.error('Error ocurred while order expenses...', error);
      res.status(400).json({
        message: 'Failed to order expenses by date. Try again later...',
      });
    }
};


// [
// 	{
// 		"id": 1,
// 		"description": "pasadasdn",
// 		"category": "asdasd",
// 		"paymentMethod": "efectivo",
// 		"amount": 5000,
// 		"deletedExpense": false,
// 		"createdAt": "2023-06-16T22:35:27.585Z",
// 		"updatedAt": "2023-06-16T22:35:27.597Z",
// 		"accountId": 2
// 	},
// 	{
// 		"id": 2,
// 		"description": "b xfgxv",
// 		"category": "aszvczxvzcvdasd",
// 		"paymentMethod": "banco",
// 		"amount": 60000,
// 		"deletedExpense": false,
// 		"createdAt": "2023-06-16T23:37:42.753Z",
// 		"updatedAt": "2023-06-16T23:37:42.797Z",
// 		"accountId": 1
// 	}
// ]