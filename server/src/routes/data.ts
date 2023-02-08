import express from 'express';
import { receiveDataPoint } from '../controllers/data';

const dataRouter: express.Router = express.Router();

dataRouter.post('/', receiveDataPoint);

export default dataRouter;

