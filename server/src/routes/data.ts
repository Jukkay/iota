import express from 'express';
import checkJWT from '../middleware/checkJWT';
import controller from '../controllers/user';
import { saveDataPoint } from '../controllers/data';

const dataRouter: express.Router = express.Router();

dataRouter.post('/', saveDataPoint);
dataRouter.patch('/', checkJWT, controller.updateUser);
// userRouter.get('/images', controller.getUserImageIDs)
dataRouter
	.route('/:id')
	.get(checkJWT, controller.getUserInformation)
	.delete(checkJWT, controller.deleteUser);

export default dataRouter;
