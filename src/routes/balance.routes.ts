import {Router} from 'express';
import { getBalance } from '../Handlers/movementsHandler';
import { getBalanceDateFilter, getBalanceAccountFilter } from '../Handlers/Classificators/Filters/balanceFilterHandler';
import { getBalanceDateOrder, getBalanceAmountOrder, getBalanceAlphaOrder } from '../Handlers/Classificators/Orders/balanceOrderHandler';

const balanceRouter : Router = Router();

    balanceRouter.get('/dateFilter/:id', getBalanceDateFilter);

    balanceRouter.get('/accountFilter/:id', getBalanceAccountFilter);

    balanceRouter.get('/alphaOrder', getBalanceAlphaOrder)

    balanceRouter.get('/amountOrder', getBalanceAmountOrder)

    balanceRouter.get('/dateOrder', getBalanceDateOrder)

    balanceRouter.get('/:id', getBalance);

export default balanceRouter;