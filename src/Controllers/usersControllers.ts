import { User } from "../models/User";

export const createUser = async (user:any) => {

    const newUser = await User.create(user)

    return newUser

}
