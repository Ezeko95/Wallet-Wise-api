import { Request, Response } from "express";
import { Expense } from "../models/Expense";

export const getExpenses = async (req: Request, res: Response) => {
  try {
    Expense.findAll().then((expense) => {
      res.send(expense);
    });
  } catch (error) {
    console.error("Error ocurred while fetching expenses...", error);
    res
      .status(400)
      .json({ message: "Failed to fetch expenses. Try again later..." });
  }
};

export const postExpense = async (req: Request, res: Response) => {
  const expense = req.body;
  try {
    Expense.create(expense).then((createdExpense) => {
      res.send(createdExpense);
    });
  } catch (error) {
    console.error("Error ocurred while creating expense", error);
    res
      .status(400)
      .json({ message: "Failed to create expense. Try again later..." });
  }
};
