import { Router } from 'express';
import { getUser, getUsers, postUser, putUser, handleLoginUser } from '../Handlers/usersHandler';

const userRouter: Router = Router();

    userRouter.get('/', getUsers);

    userRouter.get('/:id', getUser);

    userRouter.post('/', postUser);

    userRouter.put('/:id', putUser);

    userRouter.post("/login", handleLoginUser)

export default userRouter;
