import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the current working directory.
  // The third parameter '' allows loading all env vars, including those without VITE_ prefix.
  const env = loadEnv(mode, process.cwd(), '');
  
  // Prioritize VITE_GEMINI_API_KEY, fallback to GEMINI_API_KEY or API_KEY
  const apiKey = env.VITE_GEMINI_API_KEY || env.GEMINI_API_KEY || env.API_KEY;

  return {
    plugins: [react()],
    define: {
      // effectively replaces `process.env.API_KEY` with the string value in the built code
      'process.env.API_KEY': JSON.stringify(apiKey),
    },
  };
});