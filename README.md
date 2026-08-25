# Priya Karkare — MERN Portfolio

A full-stack portfolio site built on the MERN stack (MongoDB, Express, React, Node),
using Redux Toolkit for state management and a component-per-section architecture.

## Structure

```
mern-portfolio/
├── client/               React + Vite + Redux Toolkit + Tailwind
│   └── src/
│       ├── components/   One component per section (Hero, Skills, Experience, ...)
│       ├── store/        Redux store + slices (ui, contact)
│       ├── data/         Resume content as plain data (resumeData.js)
│       └── theme.js      Shared design tokens
└── server/               Express + MongoDB (Mongoose)
    ├── models/           Contact.js — schema for contact-form messages
    ├── controllers/       Route handlers
    ├── routes/            /api/contact
    └── config/db.js       MongoDB connection
```

## What Redux manages

- `ui` slice — mobile nav open/close, scroll state for the sticky header
- `contact` slice — the contact form's submit status (idle / loading / succeeded / failed),
  via an async thunk (`submitContact`) that POSTs to the Express API

## Running it locally

### 1. Backend

```bash
cd server
npm install
cp .env.example .env    # then fill in your MongoDB URI
npm run dev              # starts on http://localhost:5000
```

You'll need a MongoDB connection string — a free MongoDB Atlas cluster works fine.
Paste it into `MONGODB_URI` in `server/.env`.

### 2. Frontend

```bash
cd client
npm install
cp .env.example .env    # VITE_API_URL should point at your running server
npm run dev              # starts on http://localhost:5173
```

Open http://localhost:5173 — the contact form at the bottom of the page submits
through Redux to the Express API, which saves the message in MongoDB.

## Deploying

- **Client**: Vercel or Netlify (same as your existing portfolio) — set `VITE_API_URL`
  to your deployed server's URL as an environment variable.
- **Server**: Render, Railway, or Fly.io — set `MONGODB_URI` and `CLIENT_ORIGIN`
  (your deployed client's URL) as environment variables.
