import { Shared as SharedModel } from "../models/Shared";
import { Participants as ParticipantsModel } from "../models/Participants";
import { User as UserModel } from "../models/User";

export interface IParticipant extends ParticipantsModel{
    name: string;
    expense: number;
}

export interface IShared extends SharedModel{
    name: string;
    total: number;
    personalExpense: number;
    participants: IParticipant[];
}

export const createShared = async(id:number, shared: IShared)=>{
    const newShared = await SharedModel.create(shared)
    //console.log(newShared)
    console.log(id)

    const user = await UserModel.findOne({where: { id: id }})
    
    const participant = await ParticipantsModel.bulkCreate(shared.participants)
    console.log(user?.name)

    await newShared?.$add("participants", participant)

    await user?.$add("shared", newShared)

    const sharedCreate = await SharedModel.findByPk<SharedModel>(newShared.id);

    return sharedCreate;
}



export const getRoom= async(id: number)=>{

    const room = await SharedModel.findOne({where: {id}});

    if(!room) throw Error('Shared Room does not exist');

    const room2 =  await SharedModel.findOne({where: {id}, include: [ParticipantsModel]});

    return room2;
}

export const deleteRoom = async (id: number)=>{
    const sharedFound = await SharedModel.findByPk(id);

    if(!sharedFound) throw Error('Shared Room does not exist');

    await SharedModel.destroy({where:{id}});

    return sharedFound;
}

export const hideRoom = async (id: number)=>{
    const roomFound = await SharedModel.findOne({where: {id}})

    if(!roomFound) throw Error('Shared Room does not exist');

    await SharedModel.update({deletedShared: true}, {where: {id}})

    const edit = await SharedModel.findOne({where: {id}})

    return edit
}


export const getAllRoom = async (id: number)=>{
    const rooms = await SharedModel.findAll({include: [ParticipantsModel]});
    
    if(!rooms) throw Error('No shared rooms');
    
    return rooms;
}