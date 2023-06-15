import { Request, Response } from 'express';
import { dateBalance, accountBalance } from '../../Controllers/balanceController/filterController';


export const getBalanceDateFilter = async (req: Request, res: Response) => {
    const date: Date = req.body;
    try {
       const filter = dateBalance(date);

      //  if(filter.length === 0) throw Error('Empty filter')

        res.status(200).send(' date filter');
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

