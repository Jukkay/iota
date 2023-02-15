# iota

Iota is a simple network of one server, two clients and one dashboard for administration of clients. The idea is to simulate slim devices running the clients sending sensor data to the server. The clients send sensor data to the server every 5 minutes and checkin every 15 minutes. The server saves the received data to a database and logs every minute the registered clients that haven't logged in the last 15 minutes.

## How to run?

It's complicated. I'd love to give live demonstration, but if you insist:

1. Rename dashboard/.env.example to .env and add your github Oauth app clientID and client secret to the .env file.
2. Run npm install inside the client, client2, server and dashboard containers.
3. Initialize Prisma client inside server and dashboard containers.
4. Prisma seed the database inside the server container
5. Add your github account email-address to the authorizedUsers array in nextAuth options
6. Docker-compose up
7. Go to http://localhost:5000 and login with your Github account.

Future Jukka will come up with a more user friendly installation process or deploy the containers.