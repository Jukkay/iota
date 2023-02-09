import { Activity } from '.prisma/client';
import { setIntervalAsync } from 'set-interval-async';
import { getMissingClients } from '../queries/adminQueries';
import { getConnectionAlertInterval, getConnectionCheckInterval } from '../utilities/checkENV';
import { logInfo, logError } from '../utilities/logger';

export const initConnectionsChecks = async () => {
	await checkClientConnections();
	// Create interval
	setIntervalAsync(async () => {
		await checkClientConnections();
	}, getConnectionCheckInterval());
};

const checkClientConnections = async () => {
	try {
		const missingClients = await getMissingClients();
        if (missingClients.length > 0) makeAlert(missingClients)
	} catch (err) {
		logError(err);
	}
};

const makeAlert = (missingClients: Activity[]) => {
	logInfo(`Following clients have not checked in more than ${getConnectionAlertInterval() / 60 / 1000} minutes`, missingClients);
}