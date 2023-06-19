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
import {
  getBalanceDateOrder,
  getBalanceAmountOrder,
//  getBalanceAlphaOrder
} from '../Handlers/Classificators/Orders/balanceOrderHandler';
import {
  getExpenseAlphaOrder,
  getExpenseAmountOrder,
  getExpenseDateOrder
} from '../Handlers/Classificators/Orders/expenseOrderHandler'
import {
  getIncomeAlphaOrder,
  getIncomeAmountOrder,
  getIncomeDateOrder
} from '../Handlers/Classificators/Orders/incomeOrderHandler'


const movementRouter: Router = Router();

movementRouter.post('/:id', postMovement);

movementRouter.get('/expenses/:id', getExpenses);

movementRouter.delete('/expense/:id', hideExpense);

movementRouter.put('/expense/:id', showExpenseDeleted);

movementRouter.get('/expenseDateFilter/:id', getExpenseDateFilter);

movementRouter.get('/expenseCategoryFilter/:id', getExpenseCategoryFilter);

movementRouter.get('/expenseAccountFilter/:id', getExpenseAccountFilter);

movementRouter.get('/expenseAlphaOrder/:id', getExpenseAlphaOrder);

movementRouter.get('/expenseAmountOrder/:id', getExpenseAmountOrder);

movementRouter.get('/expenseDateOrder/:id', getExpenseDateOrder);

movementRouter.get('/incomes/:id', getIncomes);

movementRouter.delete('/income/:id', hideIncome);

movementRouter.put('/income/:id', showIncomeDeleted);

movementRouter.get('/incomeDateFilter/:id', getIncomeDateFilter);

movementRouter.get('/incomeTypeFilter/:id', getIncomeTypeFilter );

movementRouter.get('/incomeAccountFilter/:id', getIncomeAccountFilter);

movementRouter.get('/incomeAlphaOrder/:id', getIncomeAlphaOrder);

movementRouter.get('/incomeAmountOrder/:id', getIncomeAmountOrder);

movementRouter.get('/incomeDateOrder/:id', getIncomeDateOrder);

export default movementRouter;
