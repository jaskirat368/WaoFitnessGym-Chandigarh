import { GoogleGenAI } from "@google/genai";
import { BUSINESS_INFO, PROGRAMS, FAQS } from '../constants';

const SYSTEM_INSTRUCTION = `
You are the AI Assistant for ${BUSINESS_INFO.name}, the best gym in Chandigarh located at ${BUSINESS_INFO.address}.
Your goal is to be helpful, energetic, and encouraging.
You must encourage users to CALL ${BUSINESS_INFO.phone} or VISIT the gym.
NEVER invent information. If you don't know, ask them to call.
NEVER mention pricing, fees, or memberships costs. Say "Please call us for the latest packages."
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
  try {
    // Access the API key exclusively from process.env.API_KEY as per guidelines
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    // Map history to the format expected by the SDK
    const chatHistory = history.map(msg => ({
      role: msg.role === 'model' ? 'model' : 'user',
      parts: [{ text: msg.text }],
    }));

    // Create chat session
    const chat = ai.chats.create({
      model: 'gemini-3-flash-preview',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
      history: chatHistory
    });

    // Send message
    const result = await chat.sendMessage({ message: userMessage });
    
    // Return text
    return result.text || "I'm sorry, I didn't catch that. Please call us for details.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having trouble connecting right now. Please call us at +91 62831 17815.";
  }
};