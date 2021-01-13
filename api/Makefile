workstation:
	docker-compose -f ./docker/docker-compose.yml --env-file ./config/.env up -d
test:
	docker-compose -f ./docker/docker-compose.yml -f ./docker/docker-compose.test.yml --env-file ./config/.env.test up -d
dev:
	docker-compose -f ./docker/docker-compose.yml --env-file ./config/.env.dev up -d
prod:
	docker-compose -f ./docker/docker-compose.yml --env-file ./config/.env.prod up -d
