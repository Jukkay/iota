up:
	docker-compose up

goto-client:
	docker-compose exec client /bin/bash

goto-db:
	docker-compose exec db /bin/bash

goto-server:
	docker-compose exec server /bin/bash

goto-dashboard:
	docker-compose exec dashboard /bin/bash

install:
	docker-compose run dashboard "npm install"