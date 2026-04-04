'use client';
import { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';
import gsap from 'gsap';

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Halo! Saya asisten virtual Yayasan Literasi. Ada yang bisa saya bantu terkait program atau donasi hari ini?' }
  ]);
  const [input, setInput] = useState('');
  const chatRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    // Animate button entrance
    gsap.fromTo(buttonRef.current,
      { scale: 0, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.5, delay: 1, ease: 'back.out(1.5)' }
    );
  }, []);

  useEffect(() => {
    if (isOpen && chatRef.current) {
      gsap.fromTo(chatRef.current,
        { y: 50, opacity: 0, scale: 0.9 },
        { y: 0, opacity: 1, scale: 1, duration: 0.4, ease: 'power3.out' }
      );
    }
  }, [isOpen]);

  const handleSend = () => {
    if (!input.trim()) return;
    
    setMessages(prev => [...prev, { role: 'user', content: input }]);
    setInput('');
    
    setTimeout(() => {
      setMessages(prev => [
        ...prev, 
        { role: 'assistant', content: 'Terima kasih atas pesan Anda! Saat ini saya masih dalam versi demo, namun jika Anda ingin bergabung menjadi relawan, silakan klik tombol "Gabung Sekarang" di bagian atas halaman. Mari bersama cerdaskan bangsa!' }
      ]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen && (
        <div ref={chatRef} className="bg-white text-gray-900 w-[350px] rounded-2xl shadow-2xl overflow-hidden mb-4 border border-emerald-100 flex flex-col h-[450px] origin-bottom-right">
          {/* Header */}
          <div className="bg-emerald-600 p-4 flex justify-between items-center text-white">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-sm">LiterasiBot</h3>
                <p className="text-xs text-emerald-100">Aktif membalas</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-emerald-100 hover:text-white transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Chat Body */}
          <div className="flex-1 p-4 overflow-y-auto bg-gray-50 flex flex-col gap-4">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex gap-2 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
                <div className={`w-8 h-8 rounded-full flex flex-shrink-0 items-center justify-center ${msg.role === 'user' ? 'bg-amber-400 text-white' : 'bg-emerald-100 text-emerald-600'}`}>
                  {msg.role === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                </div>
                <div className={`p-3 text-sm rounded-2xl max-w-[75%] shadow-sm ${msg.role === 'user' ? 'bg-amber-400 text-emerald-950 rounded-tr-none' : 'bg-white border border-gray-100 text-gray-700 rounded-tl-none'}`}>
                  {msg.content}
                </div>
              </div>
            ))}
          </div>

          {/* Chat Footer */}
          <div className="p-3 bg-white border-t border-gray-100 flex gap-2">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ketik pesan..." 
              className="flex-1 bg-gray-50 border border-gray-200 rounded-full px-4 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
            />
            <button 
              onClick={handleSend}
              className="w-10 h-10 bg-emerald-600 text-white rounded-full flex items-center justify-center hover:bg-emerald-700 transition-colors shadow-md"
            >
              <Send className="w-4 h-4 ml-1" />
            </button>
          </div>
        </div>
      )}

      {/* Floating Button */}
      {!isOpen && (
        <button 
          ref={buttonRef}
          onClick={() => setIsOpen(true)}
          className="w-16 h-16 bg-emerald-600 text-white rounded-full flex items-center justify-center shadow-2xl hover:bg-emerald-700 hover:scale-110 transition-all group opacity-0"
        >
          <MessageCircle className="w-8 h-8" />
          <span className="absolute -top-2 -right-2 w-4 h-4 bg-amber-400 border-2 border-white rounded-full"></span>
        </button>
      )}
    </div>
  );
}
