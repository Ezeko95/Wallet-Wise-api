import { Request, Response } from 'express';
import { getAllIdIncomes, deleteIncome, reverseDeleteIncome } from '../Controllers/incomeControllers';

export const getIncomes = async (req: Request, res: Response) => {
    const id = req.params.id;
    
    try {

        const incomes = await getAllIdIncomes(+id);
        res.status(200).send(incomes);
    
    } catch (error) {
        console.error('Error ocurred while fetching incomes...', error);
        res
            .status(400)
            .json({ message: 'Failed to fetch incomes. Try again later...' });
    }
};

export const hideIncome = (req: Request, res: Response)=>{
    const id = req.params.id;
    
    try {
        const incomeDel= deleteIncome(+id);
        if(!incomeDel) throw Error('Income could not be deleted');
        res.status(200).send("the income id: "+ id +" has been deleted ")
    } catch (error) {
        console.error('Error ocurred while fetching incomes...', error);
        res
            .status(400)
            .json({ message: 'Failed to fetch incomes. Try again later...' });
    }
    
};

export const showIncomeDeleted= async(req: Request, res: Response) => {
    const id = req.params.id;
  
    try {
      const expense = reverseDeleteIncome(+id);
  
        if(!expense) throw Error('The income was not recovered')
        
        res.status(200).send("the income id: "+ id +" has been recovered ")
    } catch (error) {
      console.error('Error ocurred while showing incomes...', error);
      res
        .status(400)
        .json({ message: 'Failed to show. Try again later...' });
    
    }
  };