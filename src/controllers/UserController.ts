import { Request, Response } from "express";
import { userRepository } from "../repositories/UserRepository";

export class UserController{


    


    async create(req: Request, res: Response){
        
        const {email, password} = req.body
        if (!email || !password){
            return res.json({message:"Missing user and (or) password"})
        }
        
        const userExists = await userRepository.findOne({where: {email}});

        if (userExists){
            return res.sendStatus(409)
        }
        const newUser = userRepository.create({email,password})
        await userRepository.save(newUser)

        return res.status(201).json(newUser)
    }






}