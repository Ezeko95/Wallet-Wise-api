import { Request, Response } from "express";
import {
  createAdmin,
  loginAdmin,
  updateUser,
  userSearch,
  banUser,
  suspendUser,
} from "../Controllers/adminController";

/////////////// REGISTRO ADMIN ////////////////
export const postAdmin = async (req: Request, res: Response) => {
  const admin = req.body;
  try {
    if (!admin.name || !admin.password) throw new Error("Missing data");
    const newAdmin = await createAdmin(admin);
    res.status(200).send(newAdmin);
  } catch (error) {
    res.status(400).json({ message: "Failed to create new Admin" });
  }
};

//////////////// LOGIN ADMIN ///////////////////////
export const handleLoginAdmin = async (req: Request, res: Response) => {
  const { name, password } = req.body;
  try {
    const accessToken = await loginAdmin(name, password);
    res.status(200).send(accessToken);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

/////////// MAKE USER PREMIUM ////////////////

export const putUser = async (req: Request, res: Response) => {
  const id = req.params.id;
  try {
    const user = await updateUser(+id);
    res.status(200).send(user);
  } catch (error) {
    console.error("Error", error);
    res
      .status(400)
      .json({ message: "Failed to update user membership status" });
  }
};

export const searchUser = async (req: Request, res: Response) => {
  const name = req.query.name as string;
  try {
    const user = await userSearch(name);
    res.status(200).send(user);
  } catch (error) {
    res
      .status(400)
      .json({ message: "No user found with that name. Try again..." });
  }
};

export const userBan = async (req: Request, res: Response) => {
  const id = req.params.id;
  try {
    const user = await banUser(+id);
    res.status(200).send(user);
  } catch (error) {
    console.error("Error", error);
    res.status(400).json({ message: "Failed to change user activity status" });
  }
};

export const userSuspend = async (req: Request, res: Response) => {
  const id = req.params.id;
  const { date } = req.body;
  try {
    const user = await suspendUser(+id, new Date(date));
    res.status(200).send(user);
  } catch (error) {
    console.error("Error", error);
    res.status(400).json({ message: "Failed to suspend user" });
  }
};
