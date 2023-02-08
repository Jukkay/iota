import express from 'express';
import { create } from '../controllers/admin';

const adminRouter: express.Router = express.Router();

adminRouter.post('/', create);
adminRouter.patch('/', create);
// userRouter.get('/images', controller.getUserImageIDs)
adminRouter
	.route('/:id')

export default adminRouter;
