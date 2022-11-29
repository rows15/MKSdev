import { Request, Response } from "express";
import { userRepository } from "../repositories/UserRepository";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';


export class AuthController{


    


    async auth(req: Request, res: Response){
        
        const {email, password} = req.body
        if (!email || !password){
            return res.json({message:"Missing user and (or) password"})
        }
        
        const user = await userRepository.findOne({where: {email}});

        if (!user){
            return res.sendStatus(401)
        }
        const isValidPassword = await bcrypt.compare(password, user.password)
        if (!isValidPassword){
            return res.sendStatus(401)
        }
        const token = jwt.sign({id: user.id},'secret1',{expiresIn: '1d'})

        user.password = "_"

        return res.json({
            user,
            token
        })

    }






}