import { Balance as BalanceModel } from '../models/Balance';
import { Income as IncomeModel } from '../models/Income';
import { Account as AccountModel } from '../models/Account';
import { IIncome } from '../Handlers/movementsHandler';
import { NewIncome } from '../Handlers/incomeHandler';

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

    if(!income) throw Error ('Income does not exist')

    await IncomeModel.destroy({where: {id}})
    return income

    // await IncomeModel.update({deletedIncome: true}, {where: {id: id}});

    // const accountIncome = income?.accountId;

    // const accountToUpdate = await AccountModel.findOne({where: { id: accountIncome}});

    // const totalAccount = accountToUpdate?.total;

    // if(totalAccount && income?.amount){
    //     const newTotal = totalAccount - income?.amount
    //     await AccountModel.update({total: newTotal},{where: { id: accountIncome, name: income?.account}})
    // };

    // const balanceToUpdate = await BalanceModel.findOne({where: { id: accountToUpdate?.userId}})

    // const totalBalance = balanceToUpdate?.total;

    // if(totalBalance && income?.amount){
    //     const newTotal = totalBalance - income?.amount
    //     await BalanceModel.update({ total: newTotal }, { where: { id: accountToUpdate?.userId }});
    // }

    // const finalBalance = await BalanceModel.findOne({
    //     where: { id: accountToUpdate?.userId },
    //     include: [{
    //         model: AccountModel,
    //         include: [IncomeModel]
    //     }]
    // })
    
    // return finalBalance;
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

export const putIncome= async (infoIncome: NewIncome)=>{
  
    const income1 = await IncomeModel.findOne({where: {id: infoIncome.id}});
    const amount1 = income1?.amount;
  
    infoIncome.amount && await IncomeModel.update(
      { amount: infoIncome.amount }, 
      { where: {id: infoIncome.id} }
    );
  
    infoIncome.type && await IncomeModel.update(
      { type: infoIncome.type }, 
      { where: {id: infoIncome.id} }
    );
  
    const income = await IncomeModel.findOne({where: {id: infoIncome.id}});
    const accountIncome = income?.accountId;
  
    const accountToUpdate = await AccountModel.findOne({where: { id: accountIncome}});
    const totalAccount = accountToUpdate?.total;
  
    if(totalAccount && amount1 && income?.amount){
      const newTotal = totalAccount - amount1 + income?.amount;
      await AccountModel.update({total: newTotal},{where: { id: accountIncome}})
    };
    
    const balanceToUpdate = await BalanceModel.findOne({where: { id: accountToUpdate?.userId}})
    const totalBalance = balanceToUpdate?.total;
  
    if(totalBalance && amount1 && income?.amount){
      const newTotal = totalBalance - amount1 + income?.amount
      await BalanceModel.update({ total: newTotal }, { where: { id: accountToUpdate?.userId }});
    }
  
    const finalBalance = await AccountModel.findOne({
      where: { id: accountIncome, name: income?.account},
      include: 
        [ IncomeModel ]
    })
    
    return finalBalance;
  }
  