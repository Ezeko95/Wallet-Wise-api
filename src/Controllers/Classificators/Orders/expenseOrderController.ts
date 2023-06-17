// import { IAlpha } from "../../../Handlers/Classificators/Orders/expenseOrderHandler";
// import { getAllIdExpense } from "../../expenseControllers";
// import { IExpense } from "../../../Handlers/movementsHandler";
// import { Expense as ExpenseModel } from "../../../models/Expense";

// interface IExpenseOrder extends ExpenseModel{
//     description: string;
//     amount: number;
//     paymentMethod: string;
//     category: string;
// }
// export const expenseAlphaOrder= async(alpha: IAlpha, id: number)=>{
    
//     const arrayAccount = await getAllIdExpense(id);
//     const arrayExpenses: IExpenseOrder[]= arrayAccount?.map((e)=> e.expense)
//     const sortExpemses= alpha==='A'
//         ? arrayExpenses.sort((a, b)=>{
//             if(a.description.toLowerCase()> b.description.toLowerCase()) {return 1}
//             if(a.description.toLowerCase()< b.description.toLowerCase()) {return -1}
//             return 0;
//         })
//         : arrayExpenses.sort((a, b)=>{
//             if(a.description.toLowerCase()> b.description.toLowerCase()) {return -1}
//             if(a.description.toLowerCase()< b.description.toLowerCase()) {return 1}
//             return 0;
//         })
// }