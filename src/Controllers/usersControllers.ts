import { User as UserModel} from "../models/User";

interface IUser extends UserModel{
    name: string;
    lastName: string;
    email: string;
    password: string;
    premium: boolean;
}
export const createUser =  (user: IUser) => {

    const newUser = UserModel.create(user)

    return newUser

}

export const getAllUsers= async ()=>{
    const users= await UserModel.findAll();
    return users;
}

