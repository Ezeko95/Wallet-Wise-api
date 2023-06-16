import {Request, Response} from "express";
import { createAccount } from "../Controllers/accountControllers";

export const postAccount = async (req: Request, res: Response) => {

    const id = req.params.id
    const account = req.body;

    try {
        if(!account.name || !account.total) throw Error('Missing data');
        const newAccount = await createAccount( +id, account)

        res.status(200).send(newAccount)
    } catch (error) {
        res.status(400).json({message:"Hubo un error" + error});
    }

}