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

export const getPort = () => {
	if (!process.env.PORT) throw new Error('Cannot read env for port');
	return process.env.PORT;
};

export const checkENV = () => {
	getPort();
	getServerToken();
	getRefreshToken();
	getDatabaseURL();
	getClientURL();
};
