import React from 'react';

const ChatMessages = ({ messages }) => {
  return (
    <main className="flex-grow p-4 overflow-y-auto bg-white dark:bg-[#1c2541]">
      <div className="space-y-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`p-3 rounded-lg max-w-xs text-white ${message.sender === 'user' ? 'bg-blue-500' : 'bg-gray-500'}`}
            >
              {message.text}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default ChatMessages;
