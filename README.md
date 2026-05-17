**Installation**

Install the project dependencies using npm:

```bash
npm install
```

**Set Up Environment Variables**

Create a new file named `.env` in the root of your project and add the following content:

```env
# Local only — do NOT set NODE_ENV in Netlify/Vercel (the platform sets production automatically)
NEXT_PUBLIC_BASE_URL=http://localhost:3000

# FINNHUB (use FINNHUB_API_KEY for server-only, or NEXT_PUBLIC_FINNHUB_API_KEY)
FINNHUB_API_KEY=
# NEXT_PUBLIC_FINNHUB_API_KEY=
FINNHUB_BASE_URL=https://finnhub.io/api/v1

# MONGODB
MONGODB_URI=

# BETTER AUTH
BETTER_AUTH_SECRET=
BETTER_AUTH_URL=http://localhost:3000

# GEMINI
GEMINI_API_KEY=

#NODEMAILER
NODEMAILER_EMAIL=
NODEMAILER_PASSWORD=
```

**Running the Project**

```bash
npm run dev
npx inngest-cli@latest dev
```
