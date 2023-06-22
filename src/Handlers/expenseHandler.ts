import { Request, Response } from 'express';
import { createExpense, getAllIdExpense, deleteExpense, reverseDeleteExpense, putExpense } from '../Controllers/expenseControllers';

export const getExpenses = async (req: Request, res: Response) => {
  const id= req.params.id;

  try {

      const expenses = await getAllIdExpense(+id);
      res.status(200).send(expenses);

  } catch (error) {

    console.error('Error ocurred while fetching expenses...', error);
    res
      .status(400)
      .json({ message: 'Failed to fetch expenses. Try again later...' });
  }
};

export const postExpense = async (req: Request, res: Response) => {
  const expense = req.body;
  try {
    const newExpense = await createExpense(expense);
    res.status(200).send(newExpense);
  } catch (error) {
    console.error('Error ocurred while creating expense', error);
    res
      .status(400)
      .json({ message: 'Failed to create expense. Try again later...' });
  }
};

export const hideExpense = async(req: Request, res: Response)=>{
  const id = req.params.id;
  
  try {
    const expenseDel= deleteExpense(+id);
    if(!expenseDel) throw Error('Expense could not be deleted')
    res.status(200).send("the expense id: "+ id +" has been deleted ")
  } catch (error) {
    console.error('Error ocurred while hiding expenses...', error);
    res
      .status(400)
      .json({ message: 'Failed to hide expense. Try again later...' });
  }
};


export const showExpenseDeleted= async(req: Request, res: Response) => {
  const id = req.params.id;

  try {
    const expense = reverseDeleteExpense(+id);

      if(!expense) throw Error('The expense was not recovered')
      
      res.status(200).send("the expense id: "+ id +" has been recovered ")
  } catch (error) {
    console.error('Error ocurred while showing expenses...', error);
    res
      .status(400)
      .json({ message: 'Failed to show. Try again later...' });
  
  }
};

export interface NewExpense{
  description: string;
  amount: number;
  paymentMethod: string;
  category: string;
  id: number;
}
export const updateExpense=  async (req: Request, res: Response) => {
  const id = req.params.id;
  const newInfo = req.body;
  try {

    const infoExpense: NewExpense = {
      ...newInfo,
      ['id']: +id,
    };
    const expense = await putExpense(infoExpense);
    
      if(!expense) throw Error('The expense was not updated')
      
      res.status(200).send(expense)
  } catch (error) {
    console.error('Error ocurred while updating expenses...', error);
    res
      .status(400)
      .json({ message: 'Failed to update. Try again later...' });
  
  }
};
