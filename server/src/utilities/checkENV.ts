
export const getDatabaseURL = () => {
	if (!process.env.DATABASE_URL)
		throw new Error('Cannot read env for Database URL');
	return process.env.DATABASE_URL;
};

export const getClientURL = () => {
	if (!process.env.CLIENT_URL)
		throw new Error('Cannot read env for client URL');
	return process.env.CLIENT_URL;
};

export const getDashboardURL = () => {
	if (!process.env.DASHBOARD_URL)
		throw new Error('Cannot read env for DASHBOARD URL');
	return process.env.DASHBOARD_URL;
};

export const getPort = () => {
	if (!process.env.PORT) throw new Error('Cannot read env for port');
	return process.env.PORT;
};

export const getConnectionCheckInterval = () => {
	if (!process.env.CONNECTION_CHECK_INTERVAL) throw new Error('Cannot read env for connection check interval');
	return Number(process.env.CONNECTION_CHECK_INTERVAL) * 60 * 1000;
};

export const getConnectionAlertInterval = () => {
	if (!process.env.CONNECTION_ALERT_INTERVAL) throw new Error('Cannot read env for connection alert interval');
	return Number(process.env.CONNECTION_ALERT_INTERVAL) * 60 * 1000;
};

export const checkENV = () => {
	getPort();
	getDatabaseURL();
	getClientURL();
	getDashboardURL();
	getConnectionCheckInterval();
	getConnectionAlertInterval()
};