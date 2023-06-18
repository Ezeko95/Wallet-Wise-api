import { expenseDateFilter } from "./expenseFilterController";
import { incomeDateFilter } from "./incomeFilterController";
import { IDate } from "../../../Handlers/Classificators/Filters/expenseFilterHandler";
import { IAccount } from "../../../Handlers/Classificators/Filters/incomeFilterHandler";
import { Account as AccountModel } from "../../../models/Account";
import { Expense as ExpenseModel } from "../../../models/Expense";
import { Income as IncomeModel } from "../../../models/Income";

export const dateBalance = async (date: IDate, id: number) =>{

    const expenseDate = await expenseDateFilter(date, id);
    const incomeDate = await incomeDateFilter(date, id);

    if(expenseDate?.length===0 && incomeDate?.length===0) return 'Empty filter';
    else if(expenseDate?.length===0) return incomeDate;
    else if(incomeDate?.length===0) return expenseDate;
    else if(expenseDate!==undefined && expenseDate?.length!==0 && incomeDate!==undefined && incomeDate?.length!==0) return [...incomeDate, ...expenseDate]
    
}

export const accountBalance = async (account:IAccount, id: number) =>{
    const expenseAccount= await AccountModel.findOne({
        where: { userId: id, name: account.account},
        include:[ExpenseModel, IncomeModel]
      });
       return expenseAccount;
}

