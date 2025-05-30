const API_URL = `${process.env.NODE_ENV === "development" ? "http://localhost:3000" : `https://${process.env.NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL}`}/api`;

const leagues = ["eng.1", "esp.1", "ger.1", "ita.1", "fra.1", "por.1", "tur.1"];

export { API_URL, leagues };
