import { Inngest} from "inngest";

export const inngest = new Inngest({
    id: 'stocklist',
    // Local (`npm run dev`): NODE_ENV=development → Inngest dev server
    // Production (Vercel): NODE_ENV=production → Inngest Cloud
    isDev: process.env.NODE_ENV !== 'production',
    ai: { gemini: { apiKey: process.env.GEMINI_API_KEY! }},
})
