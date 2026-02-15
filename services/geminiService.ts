import { GoogleGenAI } from "@google/genai";
import { BUSINESS_INFO, PROGRAMS, FAQS } from '../constants';

const SYSTEM_INSTRUCTION = `
You are the elite Fitness Assistant for Wao Fitness Gym. 
Your goal is to be motivating, energetic, and professional.

STRICT RULES:
1. PURPOSE: Answer questions about the Gym, training programs, and timings. Encourage users to book a visit or join today.
2. IDENTITY: Never mention Google, Gemini, AI Studio, or that you are an AI model. You are a member of the Wao Fitness team.
3. CONCISENESS: Keep responses under 120 words. Be clear and persuasive.
4. PRICING: If asked about pricing or fees, respond EXACTLY: "Please contact us directly for updated pricing details."
5. UNRELATED TOPICS: If asked something unrelated to fitness or the gym, respond EXACTLY: "I can help with questions about Wao Fitness Gym, memberships, and training programs."
6. CONTACT DETAILS: If asked for contact details, provide EXACTLY:
   Phone: ${BUSINESS_INFO.phone}
   Location: ${BUSINESS_INFO.address}
7. HALLUCINATION: Do not provide specific numbers/fees unless explicitly provided in the context below.
8. CALL TO ACTION: Always encourage the user to book a visit, call now, or join today.

GYM CONTEXT:
- Programs: ${PROGRAMS.map(p => p.title).join(', ')}.
- Timings: ${BUSINESS_INFO.hours}.
- Location: Sector 9-D, Chandigarh.
- Notable: Wheelchair accessible, top-rated facilities, certified trainers.
- FAQs: ${FAQS.map(f => f.question + ' ' + f.answer).join(' ')}.
`;

export const sendMessageToGemini = async (history: {role: string, text: string}[], userMessage: string): Promise<string> => {
  const apiKey = process.env.API_KEY;
  
  if (!apiKey || apiKey === 'undefined' || apiKey === '') {
    console.warn("API Key is missing. Check your environment settings.");
    return `Let's get started on your fitness goals! Please call us at ${BUSINESS_INFO.phone} so we can assist you immediately.`;
  }

  try {
    const ai = new GoogleGenAI({ apiKey });
    
    // Gemini API requires alternating turns starting with "user".
    // We remove the first greeting if it's from the "model".
    const filteredHistory = history.filter((msg, index) => !(index === 0 && msg.role === 'model'));

    const contents = filteredHistory.map(msg => ({
      role: msg.role === 'model' ? 'model' : 'user',
      parts: [{ text: msg.text }]
    }));

    // Add current message
    contents.push({
      role: 'user',
      parts: [{ text: userMessage }]
    });

    // Use gemini-2.5-flash for maximum speed and stability across project tiers
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: contents,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.8,
        topP: 0.95,
        topK: 40,
      },
    });
    
    const text = response.text;
    if (!text) throw new Error("Empty response from AI");

    return text.trim();
  } catch (error: any) {
    console.error("Gemini Assistant Error:", error);
    
    // Check specifically for permission errors to provide better fallback
    if (error.message?.toLowerCase().includes('permission') || error.message?.toLowerCase().includes('403')) {
      return `I'm ready to help you reach your goals! For the most accurate info on our programs, please call us directly at ${BUSINESS_INFO.phone}.`;
    }

    return `Let's get you in the gym! For the quickest answer, give us a call at ${BUSINESS_INFO.phone}. We are excited to see you!`;
  }
};