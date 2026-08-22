# React Yoga Website

🔗 Live Demo: https://react-yoga-website.vercel.app

🔗 GitHub Repo: https://github.com/Shubham-code05/react-yoga-website

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:


## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# Divi Yoga Studio

A React + Vite landing page backed by an Express and MongoDB API.

## Stack

- Frontend: React 19, Vite
- Backend: Node.js, Express
- Database: MongoDB through Mongoose

## Run locally

```bash
npm install
npm run dev:full
```

The frontend runs at `http://localhost:5173` and the API runs at `http://localhost:5000`.

MongoDB is optional during development. Without `MONGO_URI`, the API serves built-in class data and accepts inquiries without persisting them. To enable persistence, copy `backend/.env.example` to `backend/.env` and set `MONGO_URI`.

## API

- `GET /api/health` - server and database status
- `GET /api/classes` - available yoga classes
- `POST /api/inquiries` - saves a name, email, and message
- `POST /api/newsletter` - subscribes an email address

## Production build

```bash
npm run build
npm run server
```
