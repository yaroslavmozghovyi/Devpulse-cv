# DevPulse Portfolio

A bilingual Ukrainian/English portfolio built with React and Vite, served by an Express backend.

## Run locally

```powershell
npm ci --prefix client
npm ci --prefix server
npm run build --prefix client
npm start --prefix server
```

Open `http://localhost:8010`. The server also exposes these read-only endpoints:

- `/api/v1/healthcheck`
- `/api/v1/profile`
- `/api/v1/publications`
- `/api/v1/skills`

## Deploy

The repository includes a Render Blueprint in `render.yaml`. Create a Blueprint on Render and connect this repository; Render will build the client and run the Express server. The free web-service plan can sleep after inactivity, so the first request after a quiet period may take longer. The deployment runs on Render and remains available when your computer is off.
