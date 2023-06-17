import { Router } from 'express';
import { getUser, getUsers, postUser, putUser, loginUser } from '../Handlers/usersHandler';

const userRouter: Router = Router();

    userRouter.get('/', getUsers);

    userRouter.get('/:id', getUser);

    userRouter.post('/', postUser);

    userRouter.put('/:id', putUser);

    userRouter.post("/login", loginUser)

export default userRouter;
