import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, User, Bot, Loader2 } from 'lucide-react';
import { sendMessageToGemini } from '../services/geminiService';
import { ChatMessage } from '../types';

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Hi! I am the Wao Fitness assistant. How can I help you start your fitness journey today?' }
  ]);
  const [input, setInput] = useState('');
  const [isThinking, setIsThinking] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isThinking) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsThinking(true);

    const responseText = await sendMessageToGemini(messages, userMsg);

    setMessages(prev => [...prev, { role: 'model', text: responseText }]);
    setIsThinking(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Toggle Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="bg-brand-primary text-white p-4 rounded-full shadow-[0_4px_20px_rgba(0,123,255,0.6)] hover:scale-110 transition-transform duration-300"
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="absolute bottom-20 right-0 w-[90vw] md:w-[400px] h-[500px] bg-brand-surface border border-gray-700 rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in slide-in-from-bottom-10 fade-in duration-300 origin-bottom-right z-50">
          
          {/* Header */}
          <div className="bg-gym-gradient p-4 flex justify-between items-center">
            <div>
              <h3 className="font-bold text-white">Wao AI Assistant</h3>
              <p className="text-xs text-white/80">Answers instantly</p>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white">
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-grow p-4 overflow-y-auto space-y-4 bg-brand-surface">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`flex max-w-[85%] ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'} gap-2`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${msg.role === 'user' ? 'bg-brand-primary' : 'bg-gray-700'}`}>
                    {msg.role === 'user' ? <User size={14} /> : <Bot size={14} />}
                  </div>
                  <div className={`p-3 rounded-2xl text-sm ${
                    msg.role === 'user' 
                      ? 'bg-brand-primary text-white rounded-tr-none' 
                      : 'bg-gray-800 text-brand-text rounded-tl-none'
                  }`}>
                    {msg.text}
                  </div>
                </div>
              </div>
            ))}
            {isThinking && (
              <div className="flex justify-start">
                 <div className="bg-gray-800 p-3 rounded-2xl rounded-tl-none flex items-center gap-2">
                   <Loader2 size={16} className="animate-spin text-brand-primary" />
                   <span className="text-xs text-brand-muted">Thinking...</span>
                 </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 bg-brand-surface border-t border-gray-800">
            <div className="relative">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Ask about prices, timings..."
                className="w-full bg-gray-800 text-white rounded-full pl-4 pr-12 py-3 focus:outline-none focus:ring-2 focus:ring-brand-primary text-sm"
              />
              <button 
                onClick={handleSend}
                disabled={!input.trim() || isThinking}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-brand-primary rounded-full text-white disabled:opacity-50 hover:bg-blue-600 transition-colors"
              >
                <Send size={16} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;