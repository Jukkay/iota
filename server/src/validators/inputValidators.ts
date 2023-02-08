
import { Request } from 'express';
import { z } from 'zod';

const checkinSchema = z.object({
	clientId: z.string(),
	clientKey: z.string(),
});

const dataPointSchema = checkinSchema.extend({
	data: z.string(),
})


export const validateDataPoint = (req: Request) => {
    return dataPointSchema.parse(req.body);
}

export const validateCheckin = (req: Request) => {
    return checkinSchema.parse(req.body);
}

