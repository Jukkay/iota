import express from 'express';
import { checkinClient } from '../controllers/checkin';

const checkinRouter: express.Router = express.Router();

checkinRouter.post('/', checkinClient);

export default checkinRouter;