import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, User, Bot, Loader2 } from 'lucide-react';
import { sendMessageToGemini } from '../services/geminiService';
import { ChatMessage } from '../types';

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Welcome to Wao Fitness! Ready to start your transformation? How can I help you today?' }
  ]);
  const [input, setInput] = useState('');
  const [isThinking, setIsThinking] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isThinking, isOpen]);

  const handleSend = async () => {
    const userMsg = input.trim();
    if (!userMsg || isThinking) return;

    // Snapshot current state for history before modification
    const historyForApi = [...messages];
    
    // Reset input and show local message
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsThinking(true);

    try {
      const responseText = await sendMessageToGemini(historyForApi, userMsg);
      setMessages(prev => [...prev, { role: 'model', text: responseText }]);
    } catch (error) {
      console.error("Chat failure:", error);
    } finally {
      setIsThinking(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="relative">
      {/* Toggle Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="bg-brand-primary text-white p-4 rounded-full shadow-[0_8px_30px_rgba(0,123,255,0.4)] hover:scale-110 active:scale-95 transition-all duration-300 z-50 relative border-2 border-white/10"
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="absolute bottom-20 right-0 w-[85vw] sm:w-[380px] h-[520px] bg-brand-surface border border-white/10 rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in slide-in-from-bottom-5 fade-in duration-300 origin-bottom-right z-50">
          
          {/* Header */}
          <div className="bg-gym-gradient p-4 flex justify-between items-center border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center border border-white/10 shadow-inner">
                <Bot size={20} className="text-white" />
              </div>
              <div>
                <h3 className="font-bold text-white text-sm">Wao Fitness Assistant</h3>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_#22c55e]"></span>
                  <p className="text-[10px] text-white/60 font-black uppercase tracking-widest">Available</p>
                </div>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white/40 hover:text-white transition-colors">
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-grow p-4 overflow-y-auto space-y-4 bg-[#0F0F0F] scrollbar-thin scrollbar-thumb-gray-800">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`flex max-w-[85%] ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'} gap-2`}>
                  <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 mt-1 ${
                    msg.role === 'user' ? 'bg-brand-primary' : 'bg-gray-800 border border-white/5'
                  }`}>
                    {msg.role === 'user' ? <User size={12} className="text-white" /> : <Bot size={12} className="text-brand-primary" />}
                  </div>
                  <div className={`p-3 rounded-2xl text-[13px] leading-relaxed ${
                    msg.role === 'user' 
                      ? 'bg-brand-primary text-white rounded-tr-none shadow-md' 
                      : 'bg-brand-surface text-brand-text border border-white/5 rounded-tl-none'
                  }`}>
                    {msg.text}
                  </div>
                </div>
              </div>
            ))}
            
            {isThinking && (
              <div className="flex justify-start">
                <div className="flex gap-2 items-center bg-brand-surface p-3 rounded-2xl rounded-tl-none border border-white/5">
                  <Loader2 size={14} className="animate-spin text-brand-primary" />
                  <span className="text-[10px] font-bold text-brand-muted uppercase tracking-widest">Typing...</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 bg-brand-surface border-t border-white/5">
            <div className="relative">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Ask us anything..."
                className="w-full bg-[#0A0A0A] text-white rounded-xl pl-4 pr-12 py-3.5 focus:outline-none focus:ring-1 focus:ring-brand-primary/50 text-sm border border-white/10"
              />
              <button 
                onClick={handleSend}
                disabled={!input.trim() || isThinking}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-2.5 bg-brand-primary rounded-lg text-white disabled:opacity-20 hover:bg-blue-600 transition-all active:scale-95"
              >
                <Send size={16} />
              </button>
            </div>
            <p className="text-[9px] text-center text-gray-600 mt-3 uppercase tracking-widest font-black">
              Wao Fitness Professional Support
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;