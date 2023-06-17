import { Request, Response } from 'express';
import { User as UserModel} from "../models/User";
import config from "../../lib/config";
import jwt from "jsonwebtoken";
import {
  createUser,
  getAllUsers,
  getOneUser,
  updateUser,
} from '../Controllers/usersControllers';

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

/////////////////LOGIN//////////////////////

interface IUser extends UserModel {
  email: string;
  password: string;
}


export const loginUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const user = await UserModel.findOne({ where: { email } });
  if (!user) {
    return res.json({ msg: "Please enter a valid username" });
  }
  const accessToken = jwt.sign({ user, email: user.email }, config.secret, {
    expiresIn: "1h",
  });
  res.json({ msg: "User logged in!", accessToken });
  try {
  } catch (error) {
    res.status(400).json({ message: "Failed to login. Check credentials" });
  }
};