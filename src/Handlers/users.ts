import { User } from "../models/User";
import { Request, Response } from "express";
import {
  createUser,
  getAllUsers,
  updateUser,
} from "../Controllers/usersControllers";

export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await getAllUsers();
    res.send(users);
  } catch (error) {
    console.error("Error ocurred while fetching users...", error);
    res
      .status(400)
      .json({ message: "Failed to fecth users. Try again later..." });
  }
};

export const postUser = async (req: Request, res: Response) => {
  const user = req.body;
  try {
    createUser(user);
    res.status(200).send(user);
  } catch (error: any) {
    console.error("Error ocurred while creating user", error);
    res
      .status(400)
      .json({ message: "Failed to create user. Try again later..." });
  }
};

export const putUser = async (req: Request, res: Response) => {
  const id = req.params.id;
  try {
    const user = await updateUser(+id);
    res.status(200).send(user);
  } catch (error) {
    console.error("Error", error)
    res.status(400).json({message: 'failed'})
  }
};
