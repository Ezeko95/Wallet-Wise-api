import { Expense as ExpenseModel } from '../models/Expense';
import { Balance as BalanceModel } from '../models/Balance';
import { Account as AccountModel } from '../models/Account';
import { IExpense} from '../Handlers/movementsHandler';

export const createExpense = async (infoExpense: IExpense) => {
  
  const newExpense = await ExpenseModel.create(infoExpense);
  
  const accountToChange = await AccountModel.findOne({
    where : { name: infoExpense.paymentMethod, userId: infoExpense.balanceId}
  })

  if (!accountToChange) {
    throw new Error('Cuenta no encontrada');
  }

  await accountToChange.$add("expense", newExpense);

  const total = accountToChange?.total
  
  if(total !== undefined){
    const newTotal = total - infoExpense.amount
    await AccountModel.update({total: newTotal},{where: { userId: infoExpense.balanceId, name: infoExpense.paymentMethod}})
  } 

  const balanceacambiar= await BalanceModel.findOne({where: { id: infoExpense.balanceId}});

  const totalBalance= balanceacambiar?.total;
  
  if(totalBalance !== undefined){
    const newTotalBalance = totalBalance - infoExpense.amount
    await BalanceModel.update({total: newTotalBalance},{where: { id: infoExpense.balanceId}})
  }

  return await AccountModel.findOne({
    where: { name: infoExpense.paymentMethod, userId: infoExpense.balanceId},
    include: [ ExpenseModel ]
  })
};


export const getAllIdExpense = async (id: number) => {
    const idExpenses = await AccountModel.findAll({
    where: { userId: id},
    include:[ ExpenseModel]
    });

    return idExpenses;
};


export const deleteExpense = async (id: number) =>{

  const expense = await ExpenseModel.findOne({where: {id: id}});

  await ExpenseModel.update({deletedExpense: true}, {where: {id: id}});

  const accountExpense = expense?.accountId;

  const accountToUpdate = await AccountModel.findOne({where: { id: accountExpense}});

  const totalAccount = accountToUpdate?.total;

  if(totalAccount && expense?.amount){
    const newTotal = totalAccount + expense?.amount
    await AccountModel.update({total: newTotal},{where: { id: accountExpense, name: expense?.paymentMethod}})
  };

  const balanceToUpdate = await BalanceModel.findOne({where: { id: accountToUpdate?.userId}})

  const totalBalance = balanceToUpdate?.total;

  if(totalBalance && expense?.amount){
    const newTotal = totalBalance + expense?.amount
    await BalanceModel.update({ total: newTotal }, { where: { id: accountToUpdate?.userId }});
  }

  const finalBalance = await BalanceModel.findOne({
    where: { id: accountToUpdate?.userId },
    include: [{
      model: AccountModel,
      include: [ExpenseModel]
    }]
  })

    return finalBalance;
};


export const reverseDeleteExpense= async (id: number) =>{
  
  const expense = await ExpenseModel.findOne({where: {id: id}});

  await ExpenseModel.update({deletedExpense: false}, {where: {id: id}});

  const accountExpense = expense?.accountId;

  const accountToUpdate = await AccountModel.findOne({where: { id: accountExpense}});

  const totalAccount = accountToUpdate?.total;

  if(totalAccount && expense?.amount){
    const newTotal = totalAccount - expense?.amount
    await AccountModel.update({total: newTotal},{where: { id: accountExpense, name: expense?.paymentMethod}})
  };

  const balanceToUpdate = await BalanceModel.findOne({where: { id: accountToUpdate?.userId}})

  const totalBalance = balanceToUpdate?.total;

  if(totalBalance && expense?.amount){
    const newTotal = totalBalance - expense?.amount
    await BalanceModel.update({ total: newTotal }, { where: { id: accountToUpdate?.userId }});
  }

  const finalBalance = await BalanceModel.findOne({
    where: { id: accountToUpdate?.userId },
    include: [{
      model: AccountModel,
      include: [ExpenseModel]
    }]
  })

    return finalBalance;
};

