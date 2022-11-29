import { Router } from "express";
import { MovieController } from "./controllers/MovieController";

const routes = Router();


routes.post('/movie', new MovieController().create)




export default routes