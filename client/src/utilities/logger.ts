export const logInfo = (...params: (string | number)[]) => {
	console.log(...params);
};

export const logError = (err: any) => {
	console.error(err);
};
