import { Request, Response } from 'express';
import { incomeDateFilter, incomeAccountFilter, incomeTypeFilter } from '../../../Controllers/Classificators/Filters/incomeFilterController';
import { IDate } from './expenseFilterHandler';

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

export interface IType {
    type: string;
}
    
export const getIncomeTypeFilter = async (req: Request, res: Response) => {
    const type: IType = req.body;
    const { id } = req.params;

    try {
        const filter = await incomeTypeFilter(type, +id);

        if(filter?.length === 0) throw Error('Empty filter');

        res.status(200).send(filter);
    } catch (error) {
        console.error('Error ocurred while filter expenses...', error);
        res.status(400).json({
        message: 'Failed to filter expenses by accounts. Try again later...',
        });
    }
};
