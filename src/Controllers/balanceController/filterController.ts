import { expenseDateFilter } from "../expenseController/filterController";
import { incomeDateFilter } from "../incomeController/filterController";
import { IDate } from "../../Handlers/expenseClassification/filterHandler";


export const dateBalance = async (date: IDate, id: number) =>{

    const expenseDate = await expenseDateFilter(date, id);
    const incomeDate = await incomeDateFilter(date, id);

    console.log('estoy en balance', expenseDate)
    
    if(expenseDate?.length===0 && incomeDate?.length===0) return 'Empty filter';
    else if(expenseDate?.length===0) return incomeDate;
    else if(incomeDate?.length===0) return expenseDate;
    else if(expenseDate!==undefined && expenseDate?.length!==0 && incomeDate!==undefined && incomeDate?.length!==0) return [...incomeDate, ...expenseDate]
    
}

export const accountBalance = (account:string) =>{
  
  
}

// {
// 	"id": 1,
// 	"total": -750,
// 	"createdAt": "2023-06-15T00:33:49.996Z",
// 	"updatedAt": "2023-06-15T00:34:53.857Z",
// 	"userId": 1,
// 	"expense": [
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
// 		},
// 		{
// 			"id": 1,
// 			"description": "nafta",
// 			"category": "combustible",
// 			"paymentMethod": "debito",
// 			"amount": 1000,
// 			"deletedExpense": true,
// 			"createdAt": "2023-06-15T00:33:56.115Z",
// 			"updatedAt": "2023-06-15T00:34:53.847Z",
// 			"balanceId": 1
// 		}
// 	],
// 	"income": [
// 		{
// 			"id": 1,
// 			"type": "sueldo",
// 			"account": "mercadopago",
// 			"amount": 1250,
// 			"deletedIncome": false,
// 			"createdAt": "2023-06-15T00:34:31.657Z",
// 			"updatedAt": "2023-06-15T00:34:31.657Z",
// 			"balanceId": 1
// 		}
// 	]
// }

// {
// 	"id": 1,
// 	"total": -1750,
// 	"createdAt": "2023-06-15T00:33:49.996Z",
// 	"updatedAt": "2023-06-15T00:34:31.691Z",
// 	"userId": 1,
// 	"income": [
// 		{
// 			"id": 1,
// 			"type": "sueldo",
// 			"account": "mercadopago",
// 			"amount": 1250,
// 			"deletedIncome": false,
// 			"createdAt": "2023-06-15T00:34:31.657Z",
// 			"updatedAt": "2023-06-15T00:34:31.657Z",
// 			"balanceId": 1
// 		}
// 	]
// }