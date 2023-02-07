import { Request, Response } from 'express';
import { ZodError } from 'zod';
import { logError } from '../utilities/logger';

// Controllers for adminRouter

// Create. dataRouter.post
export const create = async (req: Request, res: Response) => {
	try {
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
	create,
};
