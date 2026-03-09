Username: `emilys`

Password: `emilyspass`

## Startup

### Local

- `npm run build && npm run start` (port 3000)

### Docker

1. `docker build -t next-market .`
2. `docker run --rm -it -p 3000:3000 --name next-market next-market`
