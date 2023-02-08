import { Request, Response } from 'express';
import { ZodError } from 'zod';
import { findClient, updateClientActivity } from '../queries/dataQueries';
import { logError } from '../utilities/logger';
import { validateCheckin } from '../validators/inputValidators';

// Controllers for checkinRouter

// Create. checkinRouter.post
export const checkinClient = async (req: Request, res: Response) => {
	try {
		const { clientId, clientKey } = validateCheckin(req);
		const client = await findClient(clientId);
		if (!client)
			return res.status(400).json({ message: 'Invalid client id' });
		if (client.clientKey !== clientKey)
			return res.status(400).json({ message: 'Invalid client key' });
		await updateClientActivity(clientId);

		return res.status(200).json({
            message: 'Successfully checked in client'
        })
	} catch (err) {
		logError(err);
		if (err instanceof ZodError)
			return res.status(400).json({
				message: err.message,
			});
		return res.status(500).json({
			message: 'Something went wrong',
		});
	}
};

export default {
	checkinClient,
};
