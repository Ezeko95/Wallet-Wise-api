import { User } from "../models/User";
import { Request, Response } from "express";

export const getUsers = async (req: Request, res: Response) => {
  try {
    await User.findAll().then((users) => {
      res.send(users);
    });
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
    User.create(user).then((createdUser) => {
      res.send(createdUser);
    });
  } catch (error) {
    console.error("Error ocurred while creating user", error);
    res
      .status(400)
      .json({ message: "Failed to create user. Try again later..." });
  }
};


