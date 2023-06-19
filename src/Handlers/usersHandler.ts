import { Request, Response } from "express";
import {
  createUser,
  getAllUsers,
  getOneUser,
  updateUser,
  loginUser,
} from "../Controllers/usersControllers";

/////////// REGISTRO //////////////////
export const postUser = async (req: Request, res: Response) => {
  const user = req.body;
  try {
    if (!user.name || !user.email || !user.password)
    throw Error("Missing data");
    const newUser = await createUser(user, { userId: 0 });
    
    res.status(200).send(newUser);
  } catch (error: any) {
    console.error("Error ocurred while creating user", error);
    res
      .status(400)
      .json({ message: "Failed to create user. Try again later..." });
  }
};

/////////////////LOGIN//////////////////////

export const handleLoginUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  try {
    const accessToken = await loginUser(email, password);
    res.status(200).json({ message: "User logged in!", accessToken });
  } catch (error: any) {
    console.error(error); // Log the error to the console for debugging purposes
    res.status(500).json({ message: "Internal server error", error: error.message });
  }
};

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

export const putUser = async (req: Request, res: Response) => {
  const id = req.params.id;
  try {
    const user = await updateUser(+id);
    res.status(200).send(user);
  } catch (error) {
    console.error("Error", error);
    res.status(400).json({ message: "failed" });
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
      .json({ message: "Failed to fecth users. Try again later..." });
  }
};

