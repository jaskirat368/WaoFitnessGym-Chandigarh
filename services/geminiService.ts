import { GoogleGenAI } from "@google/genai";
import { BUSINESS_INFO, PROGRAMS, FAQS } from '../constants';

const SYSTEM_INSTRUCTION = `
You are the AI Assistant for ${BUSINESS_INFO.name}, the best gym in Chandigarh located at ${BUSINESS_INFO.address}.
Your goal is to be helpful, energetic, and encouraging.
You must encourage users to CALL ${BUSINESS_INFO.phone} or VISIT the gym.

CORE RULES:
1. NEVER invent information. If the user asks about something not in the context (like specific machines we haven't listed, or amenities like a pool/sauna if not mentioned), say: "I don't have the specific details for that right now. Please call us at ${BUSINESS_INFO.phone} so our team can assist you directly."
2. NEVER mention specific pricing, fees, or membership costs. Say: "We have various flexible packages! Please call us at ${BUSINESS_INFO.phone} for the latest rates and offers."
3. If you run into an error or don't understand, politely ask them to call.

Context:
- Rating: ${BUSINESS_INFO.rating} (${BUSINESS_INFO.reviewCount} reviews)
- Hours: ${BUSINESS_INFO.hours}
- Programs: ${PROGRAMS.map(p => p.title).join(', ')}.
- FAQs: ${FAQS.map(f => f.question + ' ' + f.answer).join(' ')}.
- Special feature: Wheelchair accessible.

Tone: Professional, motivational, friendly.
Keep answers concise (under 50 words unless detailed info is asked).
`;

export const sendMessageToGemini = async (history: {role: string, text: string}[], userMessage: string): Promise<string> => {
  // Check if key exists (injected via vite.config.ts)
  if (!process.env.API_KEY) {
    console.error("API Key missing. Please check Vercel Environment Variables (VITE_GEMINI_API_KEY).");
    return `I'm currently offline. Please call us at ${BUSINESS_INFO.phone}.`;
  }

  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    const chatHistory = history.map(msg => ({
      role: msg.role === 'model' ? 'model' : 'user',
      parts: [{ text: msg.text }],
    }));

    const chat = ai.chats.create({
      model: 'gemini-3-flash-preview',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
      history: chatHistory
    });

    const result = await chat.sendMessage({ message: userMessage });
    
    // Fallback if the model returns an empty string (e.g., safety block)
    return result.text || `Sorry, I can't access that specific information right now. You can get the details by contacting us at ${BUSINESS_INFO.phone}.`;
  } catch (error) {
    console.error("Gemini API Error:", error);
    // Polite fallback for actual API errors
    return `Sorry, I can't access that information at the moment. Please contact us directly at ${BUSINESS_INFO.phone} for the best assistance.`;
  }
};