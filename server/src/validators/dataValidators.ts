
import { Request } from 'express';
import { z } from 'zod';

const dataPointSchema = z.object({
	data: z.string(),
	clientId: z.string(),
	clientKey: z.string(),
});

export const validateDataPoint = (req: Request) => {
    return dataPointSchema.parse(req.body);
}