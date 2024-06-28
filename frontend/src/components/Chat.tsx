'use client';

import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface Message {
  user: string;
  text: string;
}

const Chat: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState<string>('');

  const fetchMessages = async () => {
    try {
      const response = await axios.get('/api/chat/messages');
      setMessages(response.data);
    } catch (error) {
      console.error('Error fetching messages:', error);
    }
  };

  const handleSendMessage = async () => {
    if (input.trim()) {
      try {
        const response = await axios.post('/api/chat/messages', { user: 'You', text: input });
        setMessages([...messages, response.data]);
        setInput('');
      } catch (error) {
        console.error('Error sending message:', error);
      }
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  return (
    <div className="max-w-lg mx-auto p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Chat</h2>
      <div className="h-64 overflow-y-auto border p-2 mb-4">
        {messages.map((message, index) => (
          <div key={index} className={`mb-2 ${message.user === 'You' ? 'text-right' : 'text-left'}`}>
            <strong>{message.user}:</strong> {message.text}
          </div>
        ))}
      </div>
      <div className="flex">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 p-2 border rounded-l-lg"
        />
        <button onClick={handleSendMessage} className="bg-blue-500 text-white p-2 rounded-r-lg">
          Invia
        </button>
      </div>
    </div>
  );
};

export default Chat;
