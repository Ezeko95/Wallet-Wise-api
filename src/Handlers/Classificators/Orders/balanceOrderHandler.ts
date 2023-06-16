import { Request, Response } from 'express';


export const getBalanceDateOrder = async (req: Request, res: Response) => {
    const date = req.body;
    try {
        res.status(200).send("estoy en la ruta de get  DATE balance");
    } catch (error) {
        res
        .status(400)
        .json({ message: 'fallo en la ruta get order balance' });
    }
}

export const getBalanceAmountOrder = async (req: Request, res: Response) => {
    const amount = req.body;
    try {
        res.status(200).send("estoy en la ruta de get order AMOUNT expenses");
    } catch (error) {
        res
        .status(400)
        .json({ message: 'fallo en la ruta get order expenses' });
    }
}


export const getBalanceAlphaOrder = async (req: Request, res: Response) => {
    const alpha = req.body;
    try {
        res.status(200).send("estoy en la ruta de get order ALPHA expenses");
    } catch (error) {
        res
        .status(400)
        .json({ message: 'fallo en la ruta get order expenses' });
    }
}

