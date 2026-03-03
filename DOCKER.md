# Docker Guide

This guide is aligned with the current state of the repository.

## Available Docker Files

- `Dockerfile`: development environment (Vite on `:3000`)
- `Dockerfile.prod`: production build + `serve` on `:3000`
- `docker-compose.yml`: only the `app-dev` service

## Requirements

- Docker
- Docker Compose

## Development with Docker Compose (Current Setup)

The current `docker-compose.yml` only defines `app-dev`.

```bash
docker compose up app-dev
```

If your setup still uses the legacy binary:

```bash
docker-compose up app-dev
```

App URL: `http://localhost:3000`

Stop services:

```bash
docker compose down
```

## Production (Manual Image)

There is currently no `app-prod` service in `docker-compose.yml`.
For production, use `Dockerfile.prod` directly:

```bash
docker build -f Dockerfile.prod -t portfolio-prod:latest .
docker run --rm -p 8080:3000 portfolio-prod:latest
```

App URL: `http://localhost:8080`

## Development (Manual Image)

```bash
docker build -t portfolio-dev:latest .
docker run --rm -p 3000:3000 -v "$(pwd)":/app portfolio-dev:latest
```

## Logs and Shell

Tail logs for `app-dev`:

```bash
docker compose logs -f app-dev
```

Open a shell inside the development container:

```bash
docker compose exec app-dev sh
```

## Quick Troubleshooting

Port 3000 already in use: update the port mapping in `docker-compose.yml`, for example:

```yaml
ports:
  - "3001:3000"
```

Rebuild without cache:

```bash
docker compose build --no-cache app-dev
```
