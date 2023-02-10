import { prisma } from '../config/db';

export const findClient = async (clientId: string) => {
	return await prisma.client.findUnique({
		where: {
			id: clientId,
		},
	});
};

export const createDataPoint = async (clientId: string, data: string) => {
	return await prisma.dataPoint.create({
		data: {
			clientId: clientId,
			dataPoint: data,
		},
	});
};

export const updateClientActivity = async (clientId: string) => {
	return await prisma.client.update({
		where: {
			id: clientId,
		},
		data: {
			lastActivity: new Date(),
		},
	});
};
