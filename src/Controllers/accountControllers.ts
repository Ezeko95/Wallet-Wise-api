import { User as UserModel } from "../models/User";
import { Account as AccountModel } from "../models/Account";
import { Balance as BalanceModel } from "../models/Balance";

interface IAccount extends AccountModel {
    name:string,
    total:number,
}

export const createAccount = async (id: number, account: IAccount) => {

    try {

        //const user = await UserModel.findOne({ where: { id } });
        
        //if (!user) {
          //  throw new Error('Usuario no encontrado');
        //}

        const newAccount = await AccountModel.create(account);

        const balanceUser = await BalanceModel.findOne({ where: { id } });

        if (!balanceUser) {
            throw new Error('Balance del usuario no encontrado');
        }

        await balanceUser.$add("account", newAccount );

        const theuser = await BalanceModel.findOne({ 
            where: { id: id},
            include: [ AccountModel]
        })

        return theuser

    } catch (error) {

        console.error(error);
        throw error;
    }
};