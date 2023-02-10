import { setIntervalAsync } from 'set-interval-async';
import {
	getApiURL,
	getClientId,
	getClientKey,
	getDataInterval,
} from '../utilities/checkENV';
import { logInfo, logError } from '../utilities/logger';

export const initMeasurements = async () => {
	sendDataPoint();
	// Create interval
	setIntervalAsync(async () => {
		sendDataPoint();
	}, getDataInterval());
};

const sendDataPoint = async () => {
	try {
		const temperature = pollSensor();
		const response = await fetch(`${getApiURL()}/data`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				clientId: getClientId(),
				clientKey: getClientKey(),
				data: temperature.toString(),
			}),
		});
		const { message } = await response.json();
		if (response.status !== 200) return logError('ERROR:', message);
		logInfo(message, temperature);
	} catch (err) {
		logError(err);
	}
};

const pollSensor = () => {
	// Create random number
	const temperature = (Math.random() * (55 - -55) + -55).toFixed(1);
	return temperature;
};
