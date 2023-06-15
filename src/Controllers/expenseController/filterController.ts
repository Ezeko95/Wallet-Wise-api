import { Expense as ExpenseModel } from "../../models/Expense"
import { getAllIdExpense } from "./expenseControllers"
import { IAccount, IDate } from "../../Handlers/expenseClassification/filterHandler";

export const expenseDateFilter = async (date: IDate, id:number) => {
    const arrayExpense = await getAllIdExpense(id)
    
    const expenseFilter = arrayExpense?.expense.filter( e => e.createdAt.toISOString().split("T")[0] === date.date);
    
    return expenseFilter;
}

export const expenseAccountFilter = async (account : IAccount, id:number) => {
    const arrayExpense= await getAllIdExpense(id);

    //arrayExpense?.expense.map( e => console.log('e.paymet', e.paymentMethod))
    console.log("Soy el console log",account.account)
    const expenseFilter = arrayExpense?.expense.filter( e => e.paymentMethod === account.account);
    
    return expenseFilter;
}

// {
// 	"id": 1,
// 	"total": -1750,
// 	"createdAt": "2023-06-15T00:33:49.996Z",
// 	"updatedAt": "2023-06-15T00:34:31.691Z",
// 	"userId": 1,
// 	"expense": [
// 		{
// 			"id": 1,
// 			"description": "nafta",
// 			"category": "combustible",
// 			"paymentMethod": "debito",
// 			"amount": 1000,
// 			"deletedExpense": false,
// 			"createdAt": "2023-06-15T00:33:56.115Z",
// 			"updatedAt": "2023-06-15T00:33:56.115Z",
// 			"balanceId": 1
// 		},
// 		{
// 			"id": 2,
// 			"description": "pan",
// 			"category": "supermercado",
// 			"paymentMethod": "efectivo",
// 			"amount": 2000,
// 			"deletedExpense": false,
// 			"createdAt": "2023-06-15T00:34:08.433Z",
// 			"updatedAt": "2023-06-15T00:34:08.433Z",
// 			"balanceId": 1
// 		}
// 	]
// }