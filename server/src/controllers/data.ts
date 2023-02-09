import { Request, Response } from 'express';
import { createDataPoint, findClient, updateClientActivity } from '../queries/dataQueries';
import { handleErrorsWithZod } from '../utilities/errorHandlers';
import { validateDataPoint } from '../validators/inputValidators';

// Controllers for dataRouter

// Create. dataRouter.post
export const receiveDataPoint = async (req: Request, res: Response) => {
	try {
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
		handleErrorsWithZod(res, err)
	}
};

export default {
	receiveDataPoint,
};
