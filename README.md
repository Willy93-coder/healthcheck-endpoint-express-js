# Sample Healthcheck Endpoints

[![Node.js](https://img.shields.io/badge/Node.js-6DA55F?logo=node.js&logoColor=white)](#)
[![Express.js](https://img.shields.io/badge/Express.js-%23404d59.svg?logo=express&logoColor=%2361DAFB)](#)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=fff)](#)
[![Docker](https://img.shields.io/badge/Docker-2496ED?logo=docker&logoColor=fff)](#)

This project is a sample backend demonstrating how to implement **production-ready healthcheck endpoints** using Node.js, TypeScript, Express, and MongoDB.

It showcases proper **liveness** and **readiness** probes, internal service state management, and a clean startup flow that follows cloud-native practices suitable for Docker and Kubernetes environments.

## Requirements

- Node.js (version 24) & pnpm.
- Docker and Docker Compose or MongoDB (local).

## Setup Project

1. Install dependencies `pnpm install`.
2. Run `docker compose up -d` to setup MongoDB.

## Testing Healthchecks

- Health

```bash
curl -s http://localhost:3000/api/health | jq
```

- Liveness

```bash
curl -s http://localhost:3000/api/livez | jq
```

- Readiness

```bash
curl -s http://localhost:3000/api/readyz | jq
```

## Stop Project

1. Stop server `Ctrl + c`.
2. Stop docker `docker compose stop`.

## Project Structure

```bash
.
├── src
│   ├── core
│   │   └── state.ts
│   ├── db
│   │   ├── db.ts
│   │   ├── mongoOptions.ts
│   │   └── mongoState.ts
│   ├── routes
│   │   └── healthRoutes.ts
│   ├── types
│   │   ├── mongoState.ts
│   │   └── serviceState.ts
│   ├── index.ts
│   └── server.ts
├── .DS_Store
├── .env
├── .env.example
├── .gitignore
├── docker-compose.yaml
├── env.ts
├── package.json
├── pnpm-lock.yaml
├── README.md
└── tsconfig.json
```
