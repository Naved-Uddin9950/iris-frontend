import React from 'react';

const ChatInput = ({ newMessage, onChange, onSend }) => {
  return (
    <footer className="bg-white p-4 border-t border-gray-300 dark:bg-[#0b132b]">
      <div className="flex items-center">
        <input
          type="text"
          value={newMessage}
          onChange={onChange}
          placeholder="Type a message..."
          className="flex-grow p-2 border rounded-lg"
        />
        <button
          onClick={onSend}
          className="ml-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          Send
        </button>
      </div>
    </footer>
  );
};

export default ChatInput;
