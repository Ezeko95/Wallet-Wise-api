import { Expense as ExpenseModel } from '../../models/Expense';
import { Balance as BalanceModel } from '../../models/Balance';
import { IExpense} from '../../Handlers/movementsHandler';

export const createExpense = async (infoExpense: IExpense) => {
  //crea el gasto especifico
    await ExpenseModel.create(infoExpense);

  //encuentra el balance al cual hace referencia, y añade el gasto
    const balanceToChange = await BalanceModel.findOne({where: { id: infoExpense.accountId}})

  //guardar en una constante el balance total actual
    const total = balanceToChange?.total

  //condicional para aplicarle al balance total, el gasto realizado
    if(total !== undefined){
    const newTotal = total - infoExpense.amount
    await BalanceModel.update({ total: newTotal }, { where: { id: infoExpense.accountId } });
    }

  //guarda en una variable el balance, con sus gastos para retornarlo
    const finalBalance = await BalanceModel.findOne({
    where: { id: infoExpense.accountId},
    include:[ ExpenseModel ]
    })

    return finalBalance;
};


export const getAllIdExpense = async (id: number) => {
    const idExpenses = await BalanceModel.findOne({
    where: { id: id},
    include:[ ExpenseModel]
    });

    return idExpenses;
};


export const deleteExpense = async (id: number) =>{

    const expense = await ExpenseModel.findOne({where: {id: id}});

    const balanceExpense = expense?.accountId

    const balanceToUpdate = await BalanceModel.findOne({where: { id: balanceExpense}})

    const amountExpense = expense?.amount

    await ExpenseModel.update({deletedExpense: true}, {where: {id: id}});

    const total = balanceToUpdate?.total

    if(total && amountExpense){
    const newTotal = total + amountExpense
    await BalanceModel.update({ total: newTotal }, { where: { id: balanceExpense } });
    }

    const finalBalance = await BalanceModel.findOne({
    where: { id: balanceExpense},
    include:[ ExpenseModel ]
    })

    return finalBalance;
};


