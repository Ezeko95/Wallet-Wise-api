import { expenseAmountOrder, expenseDateOrder } from "./expenseOrderController";
import { incomeAmountOrder, incomeDateOrder } from "./incomeOrderController";
import { IAmount, IDate } from "../../../Handlers/Classificators/Orders/balanceOrderHandler";

export const balanceAmountOrder =async(amount:IAmount, id:number)=>{
  const expense = await expenseAmountOrder(amount, id)
  const income = await incomeAmountOrder(amount, id)

  const balance = [...expense, ...income];
  console.log("entre a balanceAmountOrder")
  const results = (amount.amount.toLowerCase() === "asc") ? balance.sort((a: any, b: any)=>{
      if(a.amount> b.amount) {return 1}
      if(a.amount< b.amount) {return -1}
      return 0;
  })
  :  balance.sort((a: any, b: any)=>{
      if(a.amount> b.amount) {return -1}
      if(a.amount< b.amount) {return 1}
      return 0;
  })

  return results;
};

export const balanceDateOrder= async(date: IDate, id:number)=>{
  const expense = await expenseDateOrder(date, id)
  const income = await incomeDateOrder(date, id)

  const balance = [...expense, ...income];
  console.log("entre a balanceDateOrder")
  const results = (date.date.toLowerCase() === "asc") ? 
        balance.sort((a: any, b: any)=>{
            if(new Date(a.cretedAt) > new Date(b.createdAt)) {return 1}
            if(new Date(a.createdAt) < new Date(b.createdAt)) {return -1}
            return 0;
        })
        :  balance.sort((a: any, b: any)=>{
            if(new Date(a.createdAt) > new Date(b.createdAt)) {return -1}
            if(new Date(a.createdAt) < new Date(b.createdAt)) {return 1}
            return 0;
  })

    return results;
};