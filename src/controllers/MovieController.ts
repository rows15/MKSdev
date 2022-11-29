import { Request, Response } from "express";

export class MovieController{

    async create(req: Request, res: Response){
        const { title } = req.body

        if (!title){
            return res.status(400).json({message:"O Titulo é obrigatório"})
        }
        try{
            
        } catch(error){
            console.log(error)
            return res.status(500).json({message:"Internal server error"})

        }
    }

}