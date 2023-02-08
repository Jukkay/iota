import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { getClientURL, getDashboardURL } from './utilities/checkENV';
import dataRouter from './routes/data';
import checkinRouter from './routes/checkin';

export const app = express();

// Middleware
app.use(express.urlencoded({ extended: false, limit: '50mb' }));
app.use(express.json({ limit: '50mb' }));
app.use(helmet());
app.use(
	cors({
		origin: [getClientURL(), getDashboardURL()],
	})
);

// *** Endpoints without JWT auth ***
app.get('/', (_req: express.Request, res: express.Response) => {
	res.send('backend server is running');
});

app.use('/data', dataRouter);
app.use('/checkin', checkinRouter);
