up:
	docker-compose up

down:
	docker-compose down

goto-client:
	docker-compose exec client /bin/bash

goto-db:
	docker-compose exec db /bin/bash

goto-server:
	docker-compose exec server /bin/bash

goto-dashboard:
	docker-compose exec dashboard /bin/bash

install-dashboard:
	docker-compose run dashboard "npm install"

install-server:
	docker-compose run server "npm install"

install-client:
	docker-compose run client "npm install"

install-client2:
	docker-compose run client2 "npm install"