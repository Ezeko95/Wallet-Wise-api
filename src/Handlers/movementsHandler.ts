import { Request, Response } from 'express';
import { getAllMovements } from '../Controllers/balanceControllers';
import { createExpense } from '../Controllers/expenseControllers'
import { createIncome } from '../Controllers/incomeControllers'
import { Expense as ExpenseModel } from '../models/Expense';
import { Income as IncomeModel } from '../models/Income';

export interface IExpense extends ExpenseModel {
  description: string;
  amount: number;
  paymentMethod: string;
  category: string;
  balanceId: number;
};


export interface IIncome extends IncomeModel {
  type: string;
  amount: number;
  account: string;
  balanceId: number;
};


export const postMovement = async (req: Request, res: Response) => {

  const movement = req.body;
  const { id }= req.params;
  
    try{

      if(movement?.category){
        
          const infoExpense: IExpense = {
            ...movement,
            ["balanceId"] : +id,
          }
          const newExpense = await createExpense(infoExpense);
          res.status(200).send(newExpense);
        
      } 
      
      if(movement?.type){

        
          const infoIncome: IIncome = {
            ...movement,
            balanceId: +id
          }
          const newIncome= await createIncome(infoIncome);
          res.status(200).send(newIncome);
        
      }

    } catch (error) {

      console.error('Error ocurred while creating expense', error);
      res
        .status(400)
        .json({ message: 'Failed to create expense. Try again later...' });
    }
};


export const getBalance = async (req: Request, res: Response) => {
  const id = req.params.id;

  try {
    
      const response = await getAllMovements(+id);
      res.status(200).send(response);
    
  } catch (error) {
    
    console.error('Error ocurred while fetching movements...', error);
    res
      .status(400)
      .json({ message: 'Failed to fetch movements. Try again later...' });
  }
};