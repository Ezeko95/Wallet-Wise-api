import {Request, Response} from "express";
import { Sequelize } from "sequelize";
import { Accounts as AccountsModel} from "../models/Accounts";
import { Balance as BalanceModel } from "../models/Balance";
import { User as UserModel } from "../models/User";
import { getOneUser } from "../Controllers/usersControllers";

interface IAccount extends AccountsModel {
    name:string,
    total:number,
}

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
//       Balance
//         ||
  //    Accounts
  //   |       |
// Expense -- Incomes 

// {
//     "name": "mercadopago",
//     "total": 1000
// }

const createAccount = async (id: number, account: IAccount) => {

    try {

        const user = await UserModel.findOne({ where: { id } });
        
        if (!user) {
            throw new Error('Usuario no encontrado');
        }

        const newAccount = await AccountsModel.create(account);

        const balanceUser = await BalanceModel.findOne({ where: { id } });

        if (!balanceUser) {
            throw new Error('Balance del usuario no encontrado');
        }

        await balanceUser.$add("account", newAccount );


        const theuser = await BalanceModel.findOne({ 
            where: { id: id},
            include: [ AccountsModel]
        })

        return theuser

    } catch (error) {

        console.error(error);
        throw error;
    }
};