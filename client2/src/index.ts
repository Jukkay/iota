import app from './app.js';
import { initCheckin } from './services/checkin.js';
import { initMeasurements } from './services/measurement.js';
import { checkENV, getPort } from './utilities/checkENV';

// Check environmental variables
checkENV();

// Server start
app.listen(getPort(), () => {
	console.log(`Client server running in port ${getPort()}`);
});

// Initialize measurement service
initMeasurements();

// Initialize check-in service
initCheckin();
