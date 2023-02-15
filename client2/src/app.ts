import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { getApiURL, getDashboardURL } from './utilities/checkENV';

const app = express();

// Middleware
app.use(express.urlencoded({ extended: false, limit: '50mb' }));
app.use(express.json({ limit: '50mb' }));
app.use(helmet());
app.use(
	cors({
		origin: [getApiURL(), getDashboardURL()],
	})
);

export default app;
