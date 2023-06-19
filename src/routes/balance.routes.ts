import { Router } from 'express';
import { getBalance } from '../Handlers/movementsHandler';
import {
  getBalanceDateFilter,
  getBalanceAccountFilter,
} from '../Handlers/Classificators/Filters/balanceFilterHandler';
import {
  getBalanceDateOrder,
  getBalanceAmountOrder,
} from '../Handlers/Classificators/Orders/balanceOrderHandler';

const balanceRouter: Router = Router();

balanceRouter.get('/:id', getBalance);

balanceRouter.get('/dateFilter/:id', getBalanceDateFilter);

balanceRouter.get('/accountFilter/:id', getBalanceAccountFilter);

balanceRouter.get('/amountOrder/:id', getBalanceAmountOrder);

balanceRouter.get('/dateOrder/:id', getBalanceDateOrder);

export default balanceRouter;
