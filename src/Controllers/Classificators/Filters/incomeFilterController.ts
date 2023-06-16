import { getAllIdIncomes } from "../../incomeControllers"
import { IAccount , IDate} from "../../../Handlers/Classificators/Filters/expenseFilterHandler";

export const incomeDateFilter = async (date:IDate, id:number) => {
    
    // const arrayIncome = await getAllIdIncomes(id)

    // const incomeFilter = arrayIncome?.income.filter( e => e.createdAt.toISOString().split("T")[0] === date.date)
    
    // return incomeFilter;
}

export const incomeAccountFilter = async (account : IAccount, id:number) => {
    
    // const arrayIncome= await getAllIdIncomes(id);
    
    // const incomeFilter = arrayIncome?.income.filter( e => e.account === account.account);

    // return incomeFilter;
}
