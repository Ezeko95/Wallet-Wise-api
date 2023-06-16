import { Request, Response } from 'express';
import {
  createUser,
  getAllUsers,
  getOneUser,
  updateUser,
} from '../Controllers/usersControllers';
import { IUser } from '../Controllers/usersControllers';

export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await getAllUsers();
    res.send(users);
  } catch (error) {
    console.error('Error ocurred while fetching users...', error);
    res
      .status(400)
      .json({ message: 'Failed to fecth users. Try again later...' });
  }
};

export const postUser = async (req: Request, res: Response) => {
  const user: IUser = req.body;
  try {
    if (!user.name || !user.email) throw Error('Missing data');
    const newUser = await createUser(user, { userId: 0 });

    res.status(200).send(newUser);
  } catch (error: any) {
    console.error('Error ocurred while creating user', error);
    res
      .status(400)
      .json({ message: 'Failed to create user. Try again later...' });
  }
};

export const putUser = async (req: Request, res: Response) => {
  const id = req.params.id;
  try {
    const user = await updateUser(+id);
    res.status(200).send(user);
  } catch (error) {
    console.error('Error', error);
    res.status(400).json({ message: 'failed' });
  }
};

export const getUser = async (req: Request, res: Response) => {
  const id = req.params.id;
  try {
    const user = await getOneUser(+id);
    res.status(200).send(user);
  } catch (error) {
    res
      .status(400)
      .json({ message: 'Failed to fecth users. Try again later...' });
  }
};
