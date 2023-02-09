import { Request, Response } from 'express';
import { findClient, updateClientActivity } from '../queries/dataQueries';
import { handleErrorsWithZod } from '../utilities/errorHandlers';
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
		handleErrorsWithZod(res, err)
	}
};

export default {
	checkinClient,
};
