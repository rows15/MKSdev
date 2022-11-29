import { Router } from "express";
import { MovieController } from "./controllers/MovieController";
import { UserController } from "./controllers/UserController";

const routes = Router();

routes.post('/user',new UserController().create)

routes.get('/movie', new MovieController().list)
routes.put('/movie/:id/update', new MovieController().update)
routes.get('/movie/:id', new MovieController().search)
routes.post('/movie', new MovieController().create)
routes.delete('/movie/:id', new MovieController().delete)

routes.get('/clearcache', new MovieController().clearCache)




export default routes