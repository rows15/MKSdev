import { Router } from "express";
import { AuthController } from "./controllers/AuthController";
import { MovieController } from "./controllers/MovieController";
import { UserController } from "./controllers/UserController";
import authMiddleware from "./middlewares/middleware";
/* import swaggerui from 'swagger-ui-express'; */
import * as swaggerDocument from './swagger.json'
const routes = Router();
const swaggerJsDoc = require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express')
/* const swaggerOptions = {
    swaggerDefinition:{
        info:{
            title: "Customer Api",
            description: "teste",
            contact:{
                name:"gilso"
            }
        }
    },
    apis: ["routes.ts"]
} */
/* const swaggerDocs = swaggerJsDoc(swaggerDocument); */
routes.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

routes.post('/user',new UserController().create)
routes.post('/auth',new AuthController().auth) 

routes.get('/movie', new MovieController().list) 
routes.put('/movie/:id/update', authMiddleware, new MovieController().update)
routes.get('/movie/:id', new MovieController().search) 
routes.post('/movie', authMiddleware, new MovieController().create) 
routes.delete('/movie/:id', authMiddleware, new MovieController().delete)

routes.get('/clearcache', new MovieController().clearCache)




export default routes