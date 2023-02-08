import { app } from './app';
import { checkENV, getPort } from './utilities/checkENV';

// Check environmental variables
checkENV();

// Server start
export const httpServer = app.listen(getPort(), () => {
	console.log(`API running in port ${getPort()}`);
});