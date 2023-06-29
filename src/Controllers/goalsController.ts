import { IGoal } from "../Handlers/goalHandler";
import { Goal as GoalModal } from "../models/Goal";
import { User as UserModel } from "../models/User";
import { User as UserModal } from "../models/User";

export const createGoal = async(id: number, goal: IGoal) => {
    const newGoal= await GoalModal.create(goal);

    const user= await UserModel.findOne({where: {id}}); 

    await user?.$add("goal", newGoal);

    //const goalNew= await UserModal.findOne({where:{id}, include:[GoalModal]});
    const goalNew= await GoalModal.findByPk(newGoal.id);
    return goalNew;
}

export const getGoalById = async(id: number)=> {
    const goal= await GoalModal.findByPk(id);
    if(!goal) throw Error('Goal does not exist');
    return goal;
}

export const updateGoal = async(id: number, save: number) => {
    const updatedGoal= await GoalModal.findByPk(id);
    if(!updatedGoal) throw Error('Goal does not exist');

    save && await GoalModal.update({saved: save},{where: {id}})
    const editGoal=  GoalModal.findByPk(id);
    
    return editGoal;
}

export const getGoals= async(id: number)=> {
    const goal= await GoalModal.findAll({where: {userId: id}});
    if(goal.length === 0) throw Error('Goal does not exist');
    return goal;
}
