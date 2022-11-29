import { Router } from "express";
import { AuthController } from "./controllers/AuthController";
import { MovieController } from "./controllers/MovieController";
import { UserController } from "./controllers/UserController";
import authMiddleware from "./middlewares/middleware";
const routes = Router();

routes.post('/user',new UserController().create)
routes.post('/auth',new AuthController().auth)

routes.get('/movie', new MovieController().list)
routes.put('/movie/:id/update', new MovieController().update)
routes.get('/movie/:id', authMiddleware, new MovieController().search)
routes.post('/movie', new MovieController().create)
routes.delete('/movie/:id', new MovieController().delete)

routes.get('/clearcache', new MovieController().clearCache)




export default routes