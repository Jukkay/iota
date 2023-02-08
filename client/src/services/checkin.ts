import { setIntervalAsync } from 'set-interval-async';
import {
	getApiURL,
	getCheckinInterval,
	getClientId,
	getClientKey,
} from '../utilities/checkENV';
import { logInfo, logError } from '../utilities/logger';

export const initCheckin = async () => {
	sendCheckin();
	// Create interval
	setIntervalAsync(async () => {
		sendCheckin();
	}, getCheckinInterval());
};


const sendCheckin = async () => {
	try {
		const response = await fetch(`${getApiURL()}/checkin`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				clientId: getClientId(),
				clientKey: getClientKey(),
			}),
		});
		logInfo(response)
	} catch (err) {
		logError(err);
	}
};
