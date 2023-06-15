import { Balance as BalanceModel } from '../../models/Balance';
import { Income as IncomeModel } from '../../models/Income';
import { IIncome } from '../../Handlers/movementsHandler';

export const createIncome = async (infoIncome: IIncome) => {

    await IncomeModel.create(infoIncome);

    const balanceToChange = await BalanceModel.findOne({where: { id: infoIncome.balanceId}})

    const total = balanceToChange?.total

    if(total !== undefined){
        const newTotal = total + infoIncome.amount
        await BalanceModel.update({ total: newTotal }, { where: { id: infoIncome.balanceId } });
    }

    const finalBalance = await BalanceModel.findOne({
        where: { id: infoIncome.balanceId},
        include:[ IncomeModel]
    })

    return finalBalance;
};


export const getAllIdIncomes = async (id: number) => {
    const idIncomes= await BalanceModel.findOne({
        where: { id: id},
        include:[ IncomeModel]
    });

    return idIncomes;
};


export const deleteIncome = async (id: number) =>{

    const income = await IncomeModel.findOne({where: {id: id}});

    const balanceIncome = income?.balanceId

    const balanceToUpdate = await BalanceModel.findOne({where: { id: balanceIncome}})

    const amountIncome = income?.amount

    await IncomeModel.update({deletedIncome: true}, {where: {id: id}});

    const total = balanceToUpdate?.total

    if(total && amountIncome){
        const newTotal = total + amountIncome
        await BalanceModel.update({ total: newTotal }, { where: { id: balanceIncome } });
    }

    const finalBalance = await BalanceModel.findOne({
        where: { id: balanceIncome},
        include:[ IncomeModel]
    })

    return finalBalance;
};
