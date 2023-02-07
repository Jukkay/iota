import express from 'express';
import { create } from '../controllers/admin';
import checkJWT from '../middleware/checkJWT';

const adminRouter: express.Router = express.Router();

adminRouter.post('/', create);
adminRouter.patch('/', checkJWT, create);
// userRouter.get('/images', controller.getUserImageIDs)
adminRouter
	.route('/:id')
	.get(checkJWT, create)
	.delete(checkJWT, create);

export default adminRouter;
