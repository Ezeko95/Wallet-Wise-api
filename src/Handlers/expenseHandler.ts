import { Request, Response } from 'express';
import { createExpense, getAllIdExpense, deleteExpense } from '../Controllers/expenseControllers';

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
    console.error('Error ocurred while fetching incomes...', error);
    res
      .status(400)
      .json({ message: 'Failed to fetch incomes. Try again later...' });
  }
};
