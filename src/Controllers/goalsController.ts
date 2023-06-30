import { IGoal } from "../Handlers/goalHandler";
import { Goal as GoalModel } from "../models/Goal";
import { User as UserModel } from "../models/User";
import { Expense as ExpenseModel } from "../models/Expense";

export const createGoal = async(id: number, goal: IGoal) => {
    const newGoal= await GoalModel.create<GoalModel>(goal);

    const user= await UserModel.findOne({where: {id}}); 

    await user?.$add("goal", newGoal);

    //const goalNew= await UserModal.findOne({where:{id}, include:[GoalModal]});
    const goalNew= await GoalModel.findByPk<GoalModel>(newGoal.id);
    return goalNew;
}

export const getGoalById = async(id: number)=> {
    const goal= await GoalModel.findByPk<GoalModel>(id);
    if(!goal) throw Error('Goal does not exist');
    return goal;
}

export const updateGoal = async(id: number, save: number) => {
    const updatedGoal= await GoalModel.findByPk<GoalModel>(id);
    if(!updatedGoal) throw Error('Goal does not exist');

    save && await GoalModel.update({saved: save},{where: {id}})
    const editGoal=  GoalModel.findByPk(id);
    
    return editGoal;
}

export const getGoals= async(id: number)=> {
    const goal= await GoalModel.findAll<GoalModel>({where: {userId: id}});
    if(goal.length === 0) throw Error('Goal does not exist');
    
    return goal;
}


export const hidGoal= async (id: number)=>{
    const found= await GoalModel.findOne({where: {id}});
    if(!found) throw Error ('Goal does not exist');
    // await GoalModel.update<GoalModel>({deletedGoal: true},{where: {id}});
    
    if(found.deletedGoal === false){
        found.deletedGoal = true;
        await found.save();
        return found;
    }
}


export const deletedGoal = async (id : number)=>{
  const findGoal = await GoalModel.findByPk(id);
  if(!findGoal) throw Error ("Goal does not exist")
    
  const goalDeleted = await GoalModel.destroy<GoalModel>({where: {id}})
  const destroyExpense= await ExpenseModel.destroy({where: {description: findGoal.name}})
  return findGoal;
}

