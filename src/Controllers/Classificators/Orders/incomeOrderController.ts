import { getAllIdIncomes } from "../../incomeControllers";
import { IAlpha, IAmount, IDate  } from "../../../Handlers/Classificators/Orders/incomeOrderHandler";

export const incomeAlphaOrder= async(alpha: IAlpha, id: number)=>{
    
    const arrayAccount = await getAllIdIncomes(id);
    const arrayIncome = arrayAccount?.map((e)=> e?.income)
    let resultsArray:any = [];

    arrayIncome.map((element)=> element.filter(e => resultsArray.push(e) ))

    const results = (alpha.alpha.toLocaleLowerCase() === "a") ? resultsArray.sort((a: any, b: any) => a.type.localeCompare(b.type))
    : resultsArray.sort((a:any, b: any) => b.type.localeCompare(a.type));

    return results

}

export const incomeAmountOrder= async(amount: IAmount , id: number)=>{
    
    const arrayAccount = await getAllIdIncomes(id);
    const arrayIncomes = arrayAccount?.map((e)=> e?.income)
    let resultsArray:any = [];

    arrayIncomes.map((element)=> element.filter(e => resultsArray.push(e) ))

    const results = (amount.amount.toLowerCase() === "asc") ? resultsArray.sort((a: any, b: any)=>{
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

export const incomeDateOrder= async(date: IDate, id: number)=>{
    const arrayAccount = await getAllIdIncomes(id);
    const arrayIncomes = arrayAccount?.map((e) => e?.income)
    let resultsArray:any = [];

    arrayIncomes.map((element) => element.filter(e => resultsArray.push(e) ))

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
