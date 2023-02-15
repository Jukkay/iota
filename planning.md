Make simple client using whatever framework/language you want, it needs to:

a) pull some information, preferably something that varies by time, like weather/temperature/etc

b) send that information every 5 minutes to a server

c) ping the server every 15 seconds

Make a server for this client using some other language, server has to:

a) authenticate the client somehow (secret key, user/password, oath, etc)

b) collect the measurements with timestamps to some kind of data storage

c) alert/log if the client hasn't been communicating of pinging the server for 15 minutes

Assume the server has plenty of resources available and good internet connection but the client is a slim device and is using mobile internet and that connection can go down at any time, thus data might need to be resent.

Client

- [x] Simple node app
- [x] Read client credentials from env
- [x] Send random temperature every 5 minutes
- [x] Check in every 15 minutes

API

- [x] Node Express
- [x] Prisma
- [x] Validate tokens on connection
- [x] Save received information to DB

- [x] data route
    - [x] POST to receive data

- [x] checkin route
    - [x] POST for client pinging ( update ping time )

- [x] Service
    - [x] Check every minute if client has checked in last 15 minutes. Log if not.

Dashboard

- [x] T3 app
- [x] Client status dashboard (ADMIN ONLY)
    - [x] Basic data: id, key, last activity
    - [x] Links to client data
- [x] Login / Logout
- [x] client route (ADMIN ONLY)
    - [x] Get all clients
    - [x] Get datapoints for a client
    - [x] Get single client
    - [x] Create new client
    - [x] Update client
    - [x] Delete client