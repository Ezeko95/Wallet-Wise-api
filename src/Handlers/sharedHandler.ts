import { Request, Response } from 'express';
import { Participants } from '../models/Participants';
import {
  createShared,
  deleteRoom,
  getAllRoom,
  getRoom,
  hideRoom,
} from '../Controllers/sharedController';
import { IShared, IParticipant } from '../Controllers/sharedController';

export const postShared = async (req: Request, res: Response) => {
  const { id } = req.params;
  const shared: IShared = req.body;

  try {
    const newShared = await createShared(+id, shared);
    res.status(200).send(newShared);
  } catch (error) {
    res.status(400).json({ message: 'Failed to POST a shared' });
  }
};

export const getRoomById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const room = await getRoom(+id);
    res.status(200).send(room);
  } catch (error) {
    res.status(400).json({ message: 'Failed to GET a shared' });
  }
};

export const deleteShared = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const room = await deleteRoom(+id);
    res.status(200).send(room);
  } catch (error) {
    res.status(400).json({ message: 'Failed to DELETE a shared' });
  }
};

export const hideShared = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const room = await hideRoom(+id);
    res.status(200).send(room);
  } catch (error) {
    res.status(400).json({ message: 'Failed to DELETE a shared' });
  }
};

export const getAllRooms = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const room = await getAllRoom(+id);
    res.status(200).send(room);
  } catch (error) {
    res.status(400).json({ message: 'Failed to DELETE a shared' });
  }
};
