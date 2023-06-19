import { Router } from 'express';
import { getUser, getUsers, postUser, putUser, handleLoginUser } from '../Handlers/usersHandler';

const userRouter: Router = Router();

    userRouter.get('/', getUsers);

    userRouter.get('/:id', getUser);

    userRouter.put('/:id', putUser);
    
    userRouter.post('/register', postUser); // Registro de usuarios

    userRouter.post("/login", handleLoginUser) // Login de usuarios

export default userRouter;
