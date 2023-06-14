import {Router} from 'express';
import { getBalance } from '../Handlers/movementsHandler';

const balanceRouter : Router = Router();

balanceRouter.get('/:id', getBalance);

export default balanceRouter;