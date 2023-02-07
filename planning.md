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

* Simple node app
* Read client data from config file on startup
* Use token for requests to API
* Send random temperature every 5 minutes
* Check in every 15 minutes

API

* Node Express
* Prisma
* Validate tokens on connection
* Save received information to DB

* data route
    * POST to receive data
    * GET to get data
    * DELETE to delete data

* checkin route
    * POST for client pinging ( update ping time )

* Service
    * Check every minute if client has checked in last 15 minutes. Log if not.

Dashboard

* T3 app
* Client status dashboard (ADMIN ONLY)
    * Green if checked in last 15 minutes
    * Yellow if hasn't checked in last 15-20 minutes
    * Red if hasn't check in more that 20 minutes
    * Button to ping client
    * Button to go to client information
* Login / Logout
* client route (ADMIN ONLY)
    * POST to register new client
    * GET to get clients
    * DELETE to remove client
    * PUT to update client