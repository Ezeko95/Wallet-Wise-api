import { Router } from 'express';
import { postMovement } from '../Handlers/movementsHandler';
import {
  getExpenses,
  hideExpense,
  showExpenseDeleted,
} from '../Handlers/expenseHandler';
import {
  getIncomes,
  hideIncome,
  showIncomeDeleted,
} from '../Handlers/incomeHandler';
import {
  getIncomeDateFilter,
  getIncomeAccountFilter,
  getIncomeTypeFilter,
} from '../Handlers/Classificators/Filters/incomeFilterHandler';
import {
  getExpenseDateFilter,
  getExpenseAccountFilter,
  getExpenseCategoryFilter,
} from '../Handlers/Classificators/Filters/expenseFilterHandler';

const movementRouter: Router = Router();

movementRouter.post('/:id', postMovement);

movementRouter.get('/expenses/:id', getExpenses);

movementRouter.delete('/expense/:id', hideExpense);

movementRouter.put('/expense/:id', showExpenseDeleted);

movementRouter.get('/expenseDateFilter/:id', getExpenseDateFilter);

movementRouter.get('/expenseCategoryFilter/:id', getExpenseCategoryFilter);

movementRouter.get('/expenseAccountFilter/:id', getExpenseAccountFilter);

movementRouter.get('/incomes/:id', getIncomes);

movementRouter.delete('/income/:id', hideIncome);

movementRouter.put('/income/:id', showIncomeDeleted);

movementRouter.get('/incomeDateFilter/:id', getIncomeDateFilter);

movementRouter.get('/incomeTypeFilter/:id', getIncomeTypeFilter );

movementRouter.get('/incomeAccountFilter/:id', getIncomeAccountFilter);

export default movementRouter;
