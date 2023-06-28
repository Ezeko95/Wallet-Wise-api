import { Router } from 'express';
import { getUser, getUsers, postUser, putUser, handleLoginUser, searchUser } from '../Handlers/usersHandler';

const userRouter: Router = Router();

    userRouter.get('/', getUsers);

    userRouter.get('/:id', getUser);

    userRouter.put('/:id', putUser);

    userRouter.get("/search", searchUser)
    
    userRouter.post('/register', postUser); // Registro de usuarios

    userRouter.post("/login", handleLoginUser) // Login de usuarios

export default userRouter;
