import { Request, Response } from "express";

export const postShared = async (req: Request, res: Response) => {

    try {
        res.status(200).send("llegamos a la ruta de  POST shared")
    } catch (error) {
        res
            .status(400)
            .json({message: "Failed to POST a shared"})
    }
}

export const getShared = async (req:Request, res:Response) => {

    try {
        res.status(200).send("llegamos a la ruta de GET shared")
    } catch (error) {
        res
            .status(400)
            .json({message: "Failed to GET a shared"})
    }
}