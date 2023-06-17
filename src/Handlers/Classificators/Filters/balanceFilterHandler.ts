
import { Request, Response } from 'express';
import { dateBalance, accountBalance } from '../../../Controllers/Classificators/Filters/balanceFilterController';
import { IAccount, IDate } from './expenseFilterHandler';

export const getBalanceDateFilter = async (req: Request, res: Response) => {
    const date: IDate = req.body;
    const { id }= req.params;
    
    try {
        const filter = await dateBalance(date, +id);

    //   if(filter?.length === 0) throw Error('Empty filter')

        res.status(200).send(filter);
    } catch (error) {
        res
        .status(400)
        .json({ message: 'fallo en la ruta date filter balance' });
    }
}

export const getBalanceAccountFilter = async (req: Request, res: Response) => {
    const account:IAccount = req.body;
    const { id }= req.params;
    try {
        const filter = await accountBalance(account, +id);
        
        if(filter?.income.length===0 && filter?.expense.length===0 ){ throw Error("Empty filter")}
        res.status(200).send( filter);
    } catch (error) {
        res
        .status(400)
        .json({message: 'fallo en la ruta account filter balance' });
    }
}

