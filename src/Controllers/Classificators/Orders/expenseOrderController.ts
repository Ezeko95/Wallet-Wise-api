import { IAlpha, IAmount, IDate } from "../../../Handlers/Classificators/Orders/expenseOrderHandler";
import { getAllIdExpense } from "../../expenseControllers";
import { IExpense } from "../../../Handlers/movementsHandler";
import { Expense as ExpenseModel } from "../../../models/Expense";

// interface IExpenseOrder extends ExpenseModel{
//     description: string;
//     amount: number;
//     paymentMethod: string;
//     category: string;
// }

export const expenseAlphaOrder= async(alpha: IAlpha, id: number)=>{
    
    const arrayAccount = await getAllIdExpense(id);
    const arrayExpenses = arrayAccount?.map((e)=> e?.expense)
    let resultsArray:any = [];

    arrayExpenses.map((element)=> element.filter(e => resultsArray.push(e) ))

    const results = (alpha.alpha === "A") ? resultsArray.sort((a: any, b: any) => a.description.localeCompare(b.description))
    : resultsArray.sort((a:any, b: any) => b.description.localeCompare(a.description));

    return results

}

export const expenseAmountOrder= async(amount: IAmount , id: number)=>{
    
    const arrayAccount = await getAllIdExpense(id);
    const arrayExpenses = arrayAccount?.map((e)=> e?.expense)
    let resultsArray:any = [];

    arrayExpenses.map((element)=> element.filter(e => resultsArray.push(e) ))

    const results = (amount.amount.toLowerCase() === "asc") ? 
        resultsArray.sort((a: any, b: any)=>{
            if(a.amount> b.amount) {return 1}
            if(a.amount< b.amount) {return -1}
            return 0;
        })
        :  resultsArray.sort((a: any, b: any)=>{
            if(a.amount> b.amount) {return -1}
            if(a.amount< b.amount) {return 1}
            return 0;
    })

    return results;
}

export const expenseDateOrder= async(date: IDate, id: number)=>{
    const arrayAccount = await getAllIdExpense(id);
    const arrayExpenses = arrayAccount?.map((e) => e?.expense)
    let resultsArray:any = [];

    arrayExpenses.map((element) => element.filter(e => resultsArray.push(e) ))

    const results = (date.date.toLowerCase() === "asc") ? 
        resultsArray.sort((a: any, b: any)=>{
            if(new Date(a.cretedAt) > new Date(b.createdAt)) {return 1}
            if(new Date(a.createdAt) < new Date(b.createdAt)) {return -1}
            return 0;
        })
        :  resultsArray.sort((a: any, b: any)=>{
            if(new Date(a.createdAt) > new Date(b.createdAt)) {return -1}
            if(new Date(a.createdAt) < new Date(b.createdAt)) {return 1}
            return 0;
    })

    return results;
}


// 2023-06-17   ,  22:10:24

// 2023   ,   06   ,   17

//  22     ,  10   ,   24


// [
// 	{
// 		"id": 1,
// 		"description": "b xfgxv",
// 		"category": "aszvczxvzcvdasd",
// 		"paymentMethod": "efectivo",
// 		"amount": 60000,
// 		"deletedExpense": false,
// 		"createdAt": "2023-06-17T22:10:24.200Z",
// 		"updatedAt": "2023-06-17T22:10:24.230Z",
// 		"accountId": 1
// 	},
// 	{
// 		"id": 2,
// 		"description": "navidad",
// 		"category": "regalos",
// 		"paymentMethod": "efectivo",
// 		"amount": 400,
// 		"deletedExpense": false,
// 		"createdAt": "2023-06-17T22:50:52.212Z",
// 		"updatedAt": "2023-06-17T22:50:52.365Z",
// 		"accountId": 1
// 	},
// 	{
// 		"id": 5,
// 		"description": "gas",
// 		"category": "combustible",
// 		"paymentMethod": "efectivo",
// 		"amount": 400,
// 		"deletedExpense": false,
// 		"createdAt": "2023-06-18T00:20:17.279Z",
// 		"updatedAt": "2023-06-18T00:20:17.316Z",
// 		"accountId": 1
// 	},
// 	{
// 		"id": 6,
// 		"description": "ropa",
// 		"category": "indumentaria",
// 		"paymentMethod": "banco",
// 		"amount": 1000,
// 		"deletedExpense": false,
// 		"createdAt": "2023-06-18T00:20:45.020Z",
// 		"updatedAt": "2023-06-18T00:20:45.175Z",
// 		"accountId": 2
// 	}
// ]

[
	400,
	400,
	1000,
    60000
]