import { prisma } from "../config/db";
import { getConnectionAlertInterval } from "../utilities/checkENV";

// get activities older than set interval
export const getMissingClients = async () => {
		const now = Date.now();
		return await prisma.client.findMany({
			where: {
				lastActivity: {
					lt: new Date(
						now - getConnectionAlertInterval()
					),
				},
			},
		});
}