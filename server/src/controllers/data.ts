import { Request, Response } from 'express';
import { ZodError } from 'zod';
import { createDataPoint, findClient, updateClientActivity } from '../queries/dataQueries';
import { logInfo, logError } from '../utilities/logger';
import { validateDataPoint } from '../validators/dataValidators';

// Controllers for dataRouter

// Create. dataRouter.post
export const saveDataPoint = async (req: Request, res: Response) => {
	try {
		logInfo('Request received at saveDataPoint')
		const { data, clientId, clientKey } = validateDataPoint(req);
		const client = await findClient(clientId);
		if (!client)
			return res.status(400).json({ message: 'Invalid client id' });
		if (client.clientKey !== clientKey)
			return res.status(400).json({ message: 'Invalid client key' });
		await createDataPoint(clientId, data);
		await updateClientActivity(clientId);

		return res.status(200).json({
            message: 'Successfully saved data point'
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

// Get. dataRouter.get/:id


// Delete. dataRouter.delete/:id
export default {
	saveDataPoint,
};
