import { Request, Response } from 'express';
import { dateBalance, accountBalance } from '../../Controllers/balanceController/filterController';
import { IDate } from '../expenseClassification/filterHandler';

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
    const account:string = req.body;
    try {
        const filter = await accountBalance(account);
        
        // if(filter.length === 0){ throw Error("Empty filter")}
        res.status(200).send('account filter');
    } catch (error) {
        res
        .status(400)
        .json({message: 'fallo en la ruta account filter balance' });
    }
}

