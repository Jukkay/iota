import { Request } from 'express';
import { IAccesstoken } from '../interfaces/token';
import {  verifyJWT } from '../utilities/promisifyJWT';
import {  getServerToken } from '../utilities/checkENV';

export const decodeUserFromAccesstoken = async (req: Request) => {
	try {
		const accessToken = req.headers.authorization?.split(' ')[1];
		const server_token = getServerToken();
		if (!accessToken || !server_token) return;
		const decoded = await verifyJWT(accessToken, server_token);
		if (!decoded) return;
		const { user_id } = decoded as IAccesstoken;
		return user_id;
	} catch (err) {
		console.error(err);
	}
};
