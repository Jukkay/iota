import { setIntervalAsync } from 'set-interval-async';
import {
	getApiURL,
	getClientId,
	getClientKey,
	getDataInterval,
} from '../utilities/checkENV';
import { logInfo, logError } from '../utilities/logger';

export const initMeasurements = async () => {
  sendDataPoint()
	// Create interval
	logInfo('Initializing Measurements');
	setIntervalAsync(async () => {
		sendDataPoint();
	}, getDataInterval());
};

const sendDataPoint = async () => {
	try {
		const temperature = pollSensor();
		// Send data to API
		const res = await fetch(`${getApiURL()}/data`, {
			method: 'POST',
			body: JSON.stringify({
				clientId: getClientId(),
				clientKey: getClientKey(),
				data: temperature.toString(),
			}),
		});
	} catch (err) {
		logError(err);
	}
};

const pollSensor = () => {
	// Create random number
	const temperature = (Math.random() * (55 - -55) + -55).toFixed(1);
	logInfo('Measured temperature:', temperature);
	return temperature;
};
