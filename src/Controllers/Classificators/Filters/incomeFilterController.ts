import { getAllIdIncomes } from "../../incomeControllers"
import { IAccount , IDate} from "../../../Handlers/Classificators/Filters/expenseFilterHandler";
import { Account as AccountModel } from "../../../models/Account";
import { Income as IncomeModel } from "../../../models/Income";
import { IType } from "../../../Handlers/Classificators/Filters/incomeFilterHandler";

export const incomeDateFilter = async (date:IDate, id:number) => {

    const arrayAccount = await getAllIdIncomes(id);

    const incomeFilter = arrayAccount?.map((e) =>
        e.income.filter(
            (e) => e.createdAt.toISOString().split('T')[0] === date.date
        )
    );
    const newArray = []

    for (const element in incomeFilter) {
        if (incomeFilter[element].length > 0)
            newArray.push(incomeFilter[element]);
    }
    
    if (!newArray.length) return 'There is no income on that date';
    return newArray;
}

export const incomeAccountFilter = async (account : IAccount, id:number) => {
    
    const incomeAccount= await AccountModel.findOne({
        where: { userId: id, name: account.account},
        include:[IncomeModel]
      });
       return incomeAccount;
}

export const incomeTypeFilter = async (type:IType, id:number) => {

    const arrayAccount = await getAllIdIncomes(id);

    const incomeFilter = arrayAccount?.map((e) =>
        e.income.filter(
            (e) => e.type === type.type
        )
    );
    const newArray = []

    for (const element in incomeFilter) {
        if (incomeFilter[element].length > 0)
            newArray.push(incomeFilter[element]);
    }
    
    if (!newArray.length) return 'There is no income with that type';
    return newArray;
}
