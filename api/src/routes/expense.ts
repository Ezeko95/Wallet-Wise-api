import { Router } from "express";
import { getExpenses, postExpense } from "../Handlers/expense";

const expenseRouter: Router = Router();

expenseRouter.get("/", getExpenses);
expenseRouter.post("/", postExpense);

export default expenseRouter;
