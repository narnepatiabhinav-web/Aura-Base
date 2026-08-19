import React, { useState, useRef, useEffect } from 'react';
import { Send, Sparkles, Paperclip, Bot, User, RefreshCw } from 'lucide-react';
import AuraOrb from '../components/AuraOrb';
import './AskAIChat.css';

export default function AskAIChat() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      role: 'assistant',
      text: 'Hello! I am Aura AI, your multi-modal document intelligence assistant. Upload documents or ask any complex scientific, mathematical, or technical question.',
    },
  ]);
  const [input, setInput] = useState('');
  const [thinking, setThinking] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, thinking]);

  const handleSend = () => {
    if (!input.trim()) return;

    const userText = input.trim();
    setMessages((prev) => [...prev, { id: Date.now(), role: 'user', text: userText }]);
    setInput('');
    setThinking(true);

    setTimeout(() => {
      let responseText = `I have analyzed your query "${userText}". Based on neural semantic embeddings, the relevant context highlights key formulaic derivations and core principles.`;
      
      if (userText.toLowerCase().includes('hello') || userText.toLowerCase().includes('hi')) {
        responseText = 'Welcome back to Aura Base! How can I assist with your document research today?';
      }

      setMessages((prev) => [
        ...prev,
        { id: Date.now() + 1, role: 'assistant', text: responseText },
      ]);
      setThinking(false);
    }, 1200);
  };

  return (
    <div className="ask-ai-page">
      <div className="chat-header-bar">
        <div className="chat-header-title">
          <AuraOrb state={thinking ? 'thinking' : 'idle'} size={36} />
          <div>
            <h2>Aura Neural Studio</h2>
            <span className="status-indicator">
              <span className="status-dot" /> High Precision Vector Model Active
            </span>
          </div>
        </div>
      </div>

      <div className="chat-body">
        <div className="messages-container">
          {messages.map((msg) => (
            <div key={msg.id} className={`message-row ${msg.role}`}>
              <div className="avatar-box">
                {msg.role === 'assistant' ? <Bot size={18} /> : <User size={18} />}
              </div>
              <div className="message-content">
                <p>{msg.text}</p>
              </div>
            </div>
          ))}

          {thinking && (
            <div className="message-row assistant thinking-row">
              <div className="avatar-box">
                <Bot size={18} />
              </div>
              <div className="thinking-bubble">
                <RefreshCw size={14} className="spin-icon" />
                <span>Synthesizing response...</span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <div className="input-panel">
          <div className="input-box-wrapper">
            <button className="attach-btn" title="Attach file">
              <Paperclip size={18} />
            </button>
            <input
              type="text"
              placeholder="Ask anything about your documents or research..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            />
            <button className="send-btn" onClick={handleSend} title="Send prompt">
              <Send size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
