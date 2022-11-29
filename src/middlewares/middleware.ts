import {Request, Response, NextFunction} from 'express';
import jwt from 'jsonwebtoken';

interface TokenPayload{
    id: string;
    iat: number;
    exp: number;
}

export default function authMiddleware(
    req: Request, res: Response, next: NextFunction
){
    
    const{authorization} = req.headers;
    
    if (!authorization ||(authorization === undefined || typeof(authorization) === undefined)){
        return res.status(401).json({message:"invalid or no token"})
    }
    
    const token = authorization.replace('bearer','').trim()

    try{
        const data = jwt.verify(token,'secret1')
        
        const {id} = data as TokenPayload
        

        return next();
    } catch{
        return res.status(401).json({message:"invalid or no token"})
    }
}