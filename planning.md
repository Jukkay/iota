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
* Take token from command line
* Use token for requests to API

API

* Node Express
* Postgres
* Validate tokens on connection
* Save received information to DB

Admin panel

* Create new client
* 