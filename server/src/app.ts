import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
// import userRouter from './routes/user';
// import { refreshToken, verifyEmailToken } from './controllers/token';
// import { resetPassword } from './controllers/resetpassword';
import {
	login,
	logout
} from './controllers/user';
// import checkJWT from './middleware/checkJWT';
// import logRouter from './routes/log';
// import {
// 	getNotifications,
// 	markNotificationsRead,
// } from './controllers/notification';

export const app = express();

// initialize db pool
// SQLConnect.init();

// Middleware
app.use(express.urlencoded({ extended: false, limit: '50mb' }));
app.use(express.json({ limit: '50mb' }));
app.use(helmet());
app.use(cors());
app.use('/images', express.static('./images'));

// *** Endpoints without JWT auth ***
app.get('/', (_req: express.Request, res: express.Response) => {
	res.send('backend server is running');
});

// Login and logout
app.post('/login', login);
app.post('/logout', logout);

// // Refresh token
// app.post('/token', refreshToken);

// // Verify email address
// app.post('/verifyemail', verifyEmailToken);

// // *** Auth endpoints ***

// // Reset password via email (auth with token posted in body)
// app.post('/setpassword', resetPassword);

// // Log CRUD route
// app.use('/log', logRouter);

// // User CRUD route
// app.use('/user', userRouter);

// // Notifications GET
// app.get('/notifications/:id', checkJWT, getNotifications);

// // Notifications PATCH
// app.patch('/notifications/', checkJWT, markNotificationsRead);
