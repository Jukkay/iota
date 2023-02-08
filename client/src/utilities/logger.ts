export const logInfo = (...params: unknown[]) => {
	console.log(...params);
};

export const logError = (err: unknown) => {
	console.error(err);
};
