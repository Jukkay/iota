"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkENV = exports.getCheckinInterval = exports.getDataInterval = exports.getClientKey = exports.getClientId = exports.getPort = exports.getDashboardURL = exports.getApiURL = exports.getRefreshToken = exports.getServerToken = void 0;
const getServerToken = () => {
    if (!process.env.SERVER_TOKEN)
        throw new Error('Cannot read env for server token');
    return process.env.SERVER_TOKEN;
};
exports.getServerToken = getServerToken;
const getRefreshToken = () => {
    if (!process.env.REFRESH_TOKEN)
        throw new Error('Cannot read env for refresh token');
    return process.env.REFRESH_TOKEN;
};
exports.getRefreshToken = getRefreshToken;
const getApiURL = () => {
    if (!process.env.API_URL)
        throw new Error('Cannot read env for API URL');
    return process.env.API_URL;
};
exports.getApiURL = getApiURL;
const getDashboardURL = () => {
    if (!process.env.DASHBOARD_URL)
        throw new Error('Cannot read env for DASHBOARD URL');
    return process.env.DASHBOARD_URL;
};
exports.getDashboardURL = getDashboardURL;
const getPort = () => {
    if (!process.env.PORT)
        throw new Error('Cannot read env for port');
    return process.env.PORT;
};
exports.getPort = getPort;
const getClientId = () => {
    if (!process.env.CLIENT_ID)
        throw new Error('Cannot read env for client ID');
    return process.env.CLIENT_ID;
};
exports.getClientId = getClientId;
const getClientKey = () => {
    if (!process.env.CLIENT_KEY)
        throw new Error('Cannot read env for client key');
    return process.env.CLIENT_KEY;
};
exports.getClientKey = getClientKey;
const getDataInterval = () => {
    if (!process.env.DATA_INTERVAL)
        throw new Error('Cannot read env for data interval');
    return Number(process.env.DATA_INTERVAL) * 60 * 1000;
};
exports.getDataInterval = getDataInterval;
const getCheckinInterval = () => {
    if (!process.env.CHECKIN_INTERVAL)
        throw new Error('Cannot read env for check-in interval');
    return Number(process.env.CHECKIN_INTERVAL) * 60 * 1000;
};
exports.getCheckinInterval = getCheckinInterval;
const checkENV = () => {
    (0, exports.getServerToken)();
    (0, exports.getRefreshToken)();
    (0, exports.getPort)();
    (0, exports.getApiURL)();
    (0, exports.getDashboardURL)();
    (0, exports.getClientId)();
    (0, exports.getClientKey)();
    (0, exports.getDataInterval)();
    (0, exports.getCheckinInterval)();
};
exports.checkENV = checkENV;
