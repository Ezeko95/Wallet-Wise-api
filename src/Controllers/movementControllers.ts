import { Expense as ExpenseModel } from '../models/Expense';
import { Balance as BalanceModel } from '../models/Balance';
import {Income as IncomeModel} from '../models/Income';
import {IExpense, IIncome} from '../Handlers/movementsHandler';

export const createExpense = async (infoExpense: IExpense) => {
  //crea el gasto especifico
  await ExpenseModel.create(infoExpense);

  //encuentra el balance al cual hace referencia, y añade el gasto
  const balanceToChange = await BalanceModel.findOne({where: { id: infoExpense.balanceId}})

  //guardar en una constante el balance total actual
  const total = balanceToChange?.total

  //condicional para aplicarle al balance total, el gasto realizado
  if(total !== undefined){
    const newTotal = total - infoExpense.amount
    await BalanceModel.update({ total: newTotal }, { where: { id: infoExpense.balanceId } });
  }

  //guarda en una variable el balance, con sus gastos para retornarlo
  const finalBalance = await BalanceModel.findOne({
    where: { id: infoExpense.balanceId},
    include:[ ExpenseModel ]
  })

  return finalBalance;
};

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


export const getAllMovements = async (id: number) => {

  const finalBalance = await BalanceModel.findOne({
    where: { id: id},
    include:[ ExpenseModel, IncomeModel]
  })

  return finalBalance;

};


export const getAllIdExpense = async (id: number) => {
  const idExpenses= await BalanceModel.findOne({
    where: { id: id},
    include:[ ExpenseModel]
  });

  return idExpenses;
};

export const getAllIdIncomes = async (id: number) => {
  const idIncomes= await BalanceModel.findOne({
    where: { id: id},
    include:[ IncomeModel]
  });

  return idIncomes;
};