import { Request, Response } from "express";
import { title } from "process";
import { ILike, Like } from "typeorm";
import { movieRepository } from "../repositories/MovieRepository";

export class MovieController{

        
    async create(req: Request, res: Response){
        const { title,genre,urlPoster } = req.body
        
        if (!title){
            return res.status(400).json({message:"O Titulo é obrigatório"})
        } else if(!genre){
            return res.status(400).json({message:"O Genero é obrigatório"})
        }
        try{
            const newMovie = movieRepository.create({title,genre,urlPoster})
            console.log(newMovie)

            await movieRepository.save(newMovie)

            return res.status(201).json(newMovie)

        } catch(error){
            console.log(error)
            return res.status(500).json({message:"Internal server error"})

        }
    }

    async update(req: Request, res: Response){
        const { title,genre,urlPoster } = req.body

        
        try{
            const {id} = req.params

            const movie = await movieRepository.findOneBy({id: Number(id)})
            if (!movie){
                return res.status(404).json({message:"Filme não encontrado"})
            }
            if (title&&genre&&urlPoster){           // 28/11/22 Não sei fazer de forma elegante pra só atualizar os campos modificados,
                await movieRepository.update(id,{   // então vou deixar as opções de tudo, ou individual por campo.
                    ...movie,
                    title:title,
                    genre:genre,
                    urlPoster:urlPoster              
            })} else if (title){
                await movieRepository.update(id,{
                    ...movie,
                    title:title              
            })} else if (genre){
                
                await movieRepository.update(id,{
                    ...movie,
                    genre:genre              
            })

            }else if (urlPoster){
                    await movieRepository.update(id,{
                    ...movie,
                    urlPoster:urlPoster              
            })

            }
            return res.status(200).json({message:"Filme Atualizado com sucesso"})

        } catch(error){
            console.log(error)
            return res.status(500).json({message:"Internal server error"})

        }
    }

    async delete(req: Request, res: Response){
        
        
        try{
            const {id} = req.params

            const movie = await movieRepository.findOneBy({id: Number(id)})
            if (!movie){
                return res.status(404).json({message:"Filme não encontrado"})
            }
            await movieRepository.remove(movie)
            return res.status(200).json({message:"Filme removido com sucesso"})

        } catch(error){
            console.log(error)
            return res.status(500).json({message:"Internal server error"})

        }
    }

    async list(req: Request, res: Response){
        
        
        try{
            
            const allMovies = await movieRepository.find({select:{
                                                            id: true,
                                                            title: true,
                                                            genre: true,
                                                            urlPoster: true
            }})
            
            
            if (!allMovies){
                return res.status(404).json({message:"Não foram encontrados filmes"})
            }
            console.log("Listei Todos")
            console.log(allMovies)
            return res.status(200).json(allMovies)
            

        } catch(error){
            console.log(error)
            return res.status(500).json({message:"Internal server error"})

        }
    }
    
    async search(req: Request, res: Response){
        
        
        try{
            

            const {id} = req.params
            
            if (isNaN(Number(id))){ //Se não for número a busca:

                const movie = await movieRepository.find({select:['id','title','genre','urlPoster'], where:{title: ILike(`%${id}%`)}})
                if (!movie){
                return res.status(404).json({message:"Filme não encontrado"})
                }
                return res.status(200).json(movie)


            } else{ // se for número a busca

            const movie = await movieRepository.findOneBy({id: Number(id)})
            if (!movie){
                return res.status(404).json({message:"Filme não encontrado"})
            }
            return res.status(200).json(movie)
        }
        } catch(error){
            console.log(error)
            return res.status(500).json({message:"Internal server error"})

        }
    }
    

}