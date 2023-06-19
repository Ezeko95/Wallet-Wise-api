import { Request, Response } from 'express';
import { 
    balanceAmountOrder, 
    balanceDateOrder 
} from "../../../Controllers/Classificators/Orders/balanceOrderController"



export interface IDate {
    date: string;
}

export const getBalanceDateOrder = async (req: Request, res: Response) => {
    const { id } = req.params;
    const date = req.body;

    try {
        const results = await balanceDateOrder(date, +id)

        if(results?.length === 0) throw Error('Empty order');

        res.status(200).send(results);
    } catch (error) {
        res
        .status(400)
        .json({ message: 'fallo en la ruta get order balance' });
    }
}

export interface IAmount {
    amount: string;
}

export const getBalanceAmountOrder = async (req: Request, res: Response) => {
    const { id } = req.params;
    const amount = req.body;

    try {
        const results = await balanceAmountOrder(amount, +id)

        if(results?.length === 0) throw Error('Empty order');

        res.status(200).send(results);
    } catch (error) {
        res
        .status(400)
        .json({ message: 'fallo en la ruta get order expenses' });
    }
}