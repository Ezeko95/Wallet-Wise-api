import { IAlpha } from "../../../Handlers/Classificators/Orders/expenseOrderHandler";
import { getAllIdExpense } from "../../expenseControllers";
import { IExpense } from "../../../Handlers/movementsHandler";
import { Expense as ExpenseModel } from "../../../models/Expense";

interface IExpenseOrder extends ExpenseModel{
    description: string;
    amount: number;
    paymentMethod: string;
    category: string;
}
export const expenseAlphaOrder= async(alpha: IAlpha, id: number)=>{
    
    const arrayAccount = await getAllIdExpense(id);
    const arrayExpenses = arrayAccount?.map((e)=> e?.expense)
    let resultsArray:any = [];

    const resultsFinal = arrayExpenses.map((element)=> element.filter(e => resultsArray.push(e) ))

    const results = (alpha.alpha === "A") ? resultsArray.sort((a: any, b: any) => a.description.localeCompare(b.description))
    : resultsArray.sort((a:any, b: any) => b.description.localeCompare(a.description));

    return results

}

//: IExpenseOrder[]

// [
// 	[
// 			{
// 				"id": 1,
// 				"description": "pasadasdn",
// 				"category": "asdasd",
// 				"paymentMethod": "efectivo",
// 				"amount": 5000,
// 				"deletedExpense": false,
// 				"createdAt": "2023-06-16T22:19:18.732Z",
// 				"updatedAt": "2023-06-16T22:19:18.736Z",
// 				"accountId": 1
// 			}
// 	], 	
// 	[
// 			{
// 				"id": 2,
// 				"description": "pasadasdn",
// 				"category": "asdasd",
// 				"paymentMethod": "banco",
// 				"amount": 5000,
// 				"deletedExpense": false,
// 				"createdAt": "2023-06-16T22:19:23.035Z",
// 				"updatedAt": "2023-06-16T22:19:23.042Z",
// 				"accountId": 2
// 			}
// 	    ]
// 	
// ]