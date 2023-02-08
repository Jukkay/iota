export const logInfo = (...params: (string | number | null | undefined)[]) => {
	console.log(...params);
};

export const logError = (err: unknown) => {
	console.error(err);
};
