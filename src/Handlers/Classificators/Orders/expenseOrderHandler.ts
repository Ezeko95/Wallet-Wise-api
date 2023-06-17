import { Request, Response } from 'express';

export interface IAlpha {
    alpha: string;
  }
  
  export const getExpenseAlphaOrder = async (req: Request, res: Response) => {
    const alpha: IAlpha = req.body;
    const { id } = req.params;
    try {
      //const order = await expenseAlphaOrder(alpha, +id);
      
      //if(order?.length === 0) throw Error('Empty order');
  
      //res.status(200).send(order);
    } catch (error) {
      console.error('Error ocurred while order expenses...', error);
      res.status(400).json({
        message: 'Failed to order expenses alphabetically. Try again later...',
      });
    }
  };