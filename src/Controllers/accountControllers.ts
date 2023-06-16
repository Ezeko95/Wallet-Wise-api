import { User as UserModel } from "../models/User";
import { Account as AccountModel } from "../models/Account";
import { Balance as BalanceModel } from "../models/Balance";

interface IAccount extends AccountModel {
    name:string,
    total:number,
}

export const createAccount = async (id: number, account: IAccount) => {

    try {
        const repeatAccount = await AccountModel.findOne({
            where: {name: account.name, userId : id}
        })

        if(repeatAccount?.name.length !== undefined){
            throw new Error("existe una cuenta con ese nombre") 
        } else {

        const newAccount = await AccountModel.create(account)
            
        const balanceUser = await BalanceModel.findOne({ where: { id } });

        if (!balanceUser) {
            throw new Error('Balance del usuario no encontrado');
        }

        const total = account.total
        
        await balanceUser.$add("account", newAccount );

        const totalBalance= balanceUser?.total;

        if(totalBalance !== undefined){
            const newTotalBalance = totalBalance + total;
            await BalanceModel.update({total: newTotalBalance},{where: { id: id}})
        }

        const theuser = await BalanceModel.findOne({ 
            where: { id: id},
            include: [ AccountModel]
        })

        return theuser
        }

    } catch (error) {

        console.error(error);
        throw error;
    }
};