export const getServerToken = () => {
	if (!process.env.SERVER_TOKEN)
		throw new Error('Cannot read env for server token');
	return process.env.SERVER_TOKEN;
};

export const getRefreshToken = () => {
	if (!process.env.REFRESH_TOKEN)
		throw new Error('Cannot read env for refresh token');
	return process.env.REFRESH_TOKEN;
};

export const getApiURL = () => {
	if (!process.env.API_URL) throw new Error('Cannot read env for API URL');
	return process.env.API_URL;
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

export const getClientId = () => {
	if (!process.env.CLIENT_ID)
		throw new Error('Cannot read env for client ID');
	return process.env.CLIENT_ID;
};

export const getClientKey = () => {
	if (!process.env.CLIENT_KEY)
		throw new Error('Cannot read env for client key');
	return process.env.CLIENT_KEY;
};

export const getDataInterval = () => {
	if (!process.env.DATA_INTERVAL)
		throw new Error('Cannot read env for data interval');
	return Number(process.env.DATA_INTERVAL) * 60 * 1000;
};

export const getCheckinInterval = () => {
	if (!process.env.CHECKIN_INTERVAL)
		throw new Error('Cannot read env for check-in interval');
	return Number(process.env.CHECKIN_INTERVAL) * 60 * 1000;
};

export const checkENV = () => {
	getServerToken();
	getRefreshToken();
	getPort();
	getApiURL();
	getDashboardURL();
	getClientId();
	getClientKey();
	getDataInterval();
	getCheckinInterval();
};
