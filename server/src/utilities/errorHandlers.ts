import { ZodError } from 'zod';
import { logError } from './logger';
import { Response } from 'express';

export const handleErrorsWithZod = (res: Response, err: unknown) => {
	logError(err);
	if (err instanceof ZodError)
		return res.status(400).json({
			message: err.message,
		});
	return res.status(500).json({
		message: 'Something went wrong',
	});
};
