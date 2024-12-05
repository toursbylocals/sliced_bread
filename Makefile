
up:
	docker compose up -d

down:
	docker compose stop && docker compose rm -f

.PHONY: up down
