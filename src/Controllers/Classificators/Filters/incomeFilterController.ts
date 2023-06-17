import { getAllIdIncomes } from "../../incomeControllers"
import { IAccount , IDate} from "../../../Handlers/Classificators/Filters/expenseFilterHandler";

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
    
    if (!newArray.length) return 'No hay ingresos en la fecha indicada';
    return newArray;
}

export const incomeAccountFilter = async (account : IAccount, id:number) => {
    
    // const arrayIncome= await getAllIdIncomes(id);
    
    // const incomeFilter = arrayIncome?.income.filter( e => e.account === account.account);

    // return incomeFilter;
}

// [
// 	{
// 		"id": 1,
// 		"name": "banco",
// 		"total": 10010,
// 		"userId": 1,
// 		"createdAt": "2023-06-16T22:35:03.283Z",
// 		"updatedAt": "2023-06-16T22:35:35.125Z",
// 		"income": [
// 			{
// 				"id": 1,
// 				"type": "regalo",
// 				"account": "banco",
// 				"amount": 10,
// 				"deletedIncome": false,
// 				"createdAt": "2023-06-16T22:35:35.106Z",
// 				"updatedAt": "2023-06-16T22:35:35.120Z",
// 				"accountId": 1
// 			}
// 		]
// 	},
// 	{
// 		"id": 2,
// 		"name": "efectivo",
// 		"total": 5000,
// 		"userId": 1,
// 		"createdAt": "2023-06-16T22:35:15.753Z",
// 		"updatedAt": "2023-06-16T22:35:27.599Z",
// 		"income": []
// 	}
// ]