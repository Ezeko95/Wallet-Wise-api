import { Balance as BalanceModel } from '../models/Balance';
import { Income as IncomeModel } from '../models/Income';
import { Account as AccountModel } from '../models/Account';
import { IIncome } from '../Handlers/movementsHandler';

export const createIncome = async (infoIncome: IIncome) => {

    const newIncome = await IncomeModel.create(infoIncome);

    const accountToChange = await AccountModel.findOne({
        where : { name: infoIncome.account, userId: infoIncome.balanceId}
    })

    if (!accountToChange) {
        throw new Error('Cuenta no encontrada');
    }

    await accountToChange.$add("income", newIncome);

    const total = accountToChange?.total
    
    if(total !== undefined){
        const newTotal = total + infoIncome.amount
        await AccountModel.update({total: newTotal},{where: { userId: infoIncome.balanceId, name: infoIncome.account}})
    } 

    const balanceacambiar= await BalanceModel.findOne({where: { id: infoIncome.balanceId}});

    const totalBalance= balanceacambiar?.total;
    
    if(totalBalance !== undefined){
        const newTotalBalance = totalBalance + infoIncome.amount
        await BalanceModel.update({total: newTotalBalance},{where: { id: infoIncome.balanceId}})
    }

    return await AccountModel.findOne({
        where: { name: infoIncome.account, userId: infoIncome.balanceId},
        include: [ IncomeModel ]
    })
};


export const getAllIdIncomes = async (id: number) => {
    const idIncomes= await AccountModel.findAll({
        where: { userId: id},
        include:[ IncomeModel]
    });

    return idIncomes;
};


export const deleteIncome = async (id: number) =>{

    const income = await IncomeModel.findOne({where: {id: id}});

    await IncomeModel.update({deletedIncome: true}, {where: {id: id}});

    const accountIncome = income?.accountId;

    const accountToUpdate = await AccountModel.findOne({where: { id: accountIncome}});

    const totalAccount = accountToUpdate?.total;

    if(totalAccount && income?.amount){
        const newTotal = totalAccount - income?.amount
        await AccountModel.update({total: newTotal},{where: { id: accountIncome, name: income?.account}})
    };

    const balanceToUpdate = await BalanceModel.findOne({where: { id: accountToUpdate?.userId}})

    const totalBalance = balanceToUpdate?.total;

    if(totalBalance && income?.amount){
        const newTotal = totalBalance - income?.amount
        await BalanceModel.update({ total: newTotal }, { where: { id: accountToUpdate?.userId }});
    }

    const finalBalance = await BalanceModel.findOne({
        where: { id: accountToUpdate?.userId },
        include: [{
            model: AccountModel,
            include: [IncomeModel]
        }]
    })
    
    return finalBalance;
}


export const reverseDeleteIncome= async (id: number) =>{

    const income = await IncomeModel.findOne({where: {id: id}});

    await IncomeModel.update({deletedIncome: false}, {where: {id: id}});

    const accountIncome = income?.accountId;

    const accountToUpdate = await AccountModel.findOne({where: { id: accountIncome}});

    const totalAccount = accountToUpdate?.total;

    if(totalAccount && income?.amount){
        const newTotal = totalAccount + income?.amount
        await AccountModel.update({total: newTotal},{where: { id: accountIncome, name: income?.account}})
    };

    const balanceToUpdate = await BalanceModel.findOne({where: { id: accountToUpdate?.userId}})

    const totalBalance = balanceToUpdate?.total;

    if(totalBalance && income?.amount){
        const newTotal = totalBalance + income?.amount
        await BalanceModel.update({ total: newTotal }, { where: { id: accountToUpdate?.userId }});
    }

    const finalBalance = await BalanceModel.findOne({
        where: { id: accountToUpdate?.userId },
        include: [{
            model: AccountModel,
            include: [IncomeModel]
        }]
    })

    return finalBalance;
};
