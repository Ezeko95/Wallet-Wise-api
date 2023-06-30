import { Request, Response } from "express";
import { createGoal, getGoalById, getGoals, updateGoal, deletedGoal, hidGoal } from "../Controllers/goalsController";
import { Goal as GoalModal } from "../models/Goal";

export interface IGoal extends GoalModal{
    name: string;
    description: string;
    total: number;
    saved:number;
    
}

export const postGoal = async(req: Request, res: Response)=>{
    const {id}= req.params;
    const goal: IGoal = req.body;
    try {
        if(!goal.name|| !goal.description || !goal.total) throw Error('Missing data');
        const newGoal= await createGoal(+id, goal);
        res.status(200).send(newGoal);
    } catch (error) {
        console.error('Error ocurred while creating goal...', error);
        res
          .status(400)
          .json({ message: 'Failed to creating. Try again later...' });
      
     
    }
};

export const getGoal = async(req: Request, res: Response)=>{
    const {id}= req.params;
    try {
        const goal= await getGoalById(+id);
        res.status(200).send(goal)
    } catch (error) {
    console.error('Error ocurred while fetching goal...', error);
    res
      .status(400)
      .json({ message: 'Failed to fetch. Try again later...' });
  
  }
};

export const putGoal = async(req: Request, res: Response)=>{
    const {id}= req.params;
    const {save}= req.body;
    try {
        const newGoal= await updateGoal(+id, save);
        if(!newGoal) throw Error('aca no viene')
        res.status(200).send(newGoal);
    } catch (error) {
    console.error('Error ocurred while updating goal...', error);
    res
      .status(400)
      .json({ message: 'Failed to update. Try again later...' });
  
  }
};

export const getAllGoals = async(req: Request, res: Response)=>{
  const {id}= req.params;
  try {
      const goal= await getGoals(+id);
      res.status(200).send(goal)
  } catch (error) {
   console.error('Error ocurred while fetching goal...', error);
   res
    .status(400)
    .json({ message: 'Failed to fetch. Try again later...' });
  
  }

  
  
};
export const deleteGoal = async (req: Request, res: Response)=>{
  const {id} = req.params;
  try{
    const response = await deletedGoal(Number(id))
    res.status(200).send(response)
  } catch(error){
     console.log("Error ocurred while deleted goal...") 
     res.status(400).json({message: "Failed to deleted. Try again later..."})
  }

}


export const hideGoal = async (req: Request, res: Response)=>{
    const {id}= req.params;
    try {
        const goal= await hidGoal(+id);
        res.status(200).send(goal)
    } catch (error) {
        console.error('Error ocurred while hidding goal...', error);
   res
    .status(400)
    .json({ message: 'Failed to hide. Try again later...' });
  
    }
}