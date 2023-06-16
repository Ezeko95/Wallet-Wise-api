import { Request, Response } from 'express';
import { incomeDateFilter, incomeAccountFilter } from '../../Controllers/incomeController/filterController';
import { IDate } from '../expenseClassification/filterHandler';

export const getIncomeDateFilter = async(req: Request, res: Response) =>{
    const date: IDate= req.body;
    const { id } = req.params;
    try {
        const filter= await incomeDateFilter(date, +id);

    //    if(filter?.length === 0) throw Error('Empty filter');
        
        res.status(200).send(filter);
    } catch (error) {
        console.error('Error ocurred while filter incomes...', error);
    res
      .status(400)
      .json({ message: 'Failed to filter incomes by accounts. Try again later...' });

    }
}

export interface IAccount{
    account:string
};
 
export const getIncomeAccountFilter = async(req: Request, res: Response) =>{
    const account: IAccount = req.body;
    const { id } = req.params;
    try {
        const filter= await incomeAccountFilter(account, +id);

    //    if(filter?.length === 0) throw Error('Empty filter');
        
        res.status(200).send(filter);
        
    } catch (error) {
        console.error('Error ocurred while filter incomes...', error);
    res
      .status(400)
      .json({ message: 'Failed to filter incomes by accounts. Try again later...' });

    }
}