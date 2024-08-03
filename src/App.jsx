import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import ChatHeader from './components/ChatHeader';
import ChatMessages from './components/ChatMessages';
import ChatInput from './components/ChatInput';

function App() {
  const [messages, setMessages] = useState([
    { text: 'Hello! How can I help you today?', sender: 'bot', timestamp: '10:00 AM' },
    { text: 'I need some information about your services.', sender: 'user', timestamp: '10:01 AM' },
  ]);
  const [newMessage, setNewMessage] = useState('');
  const [selectedChat, setSelectedChat] = useState(null);
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const handleSend = () => {
    if (newMessage.trim()) {
      const newMessages = [...messages, { text: newMessage, sender: 'user', timestamp: new Date().toLocaleTimeString() }];
      setMessages(newMessages);
      setNewMessage('');
      // Simulate a bot response
      setTimeout(() => {
        setMessages([...newMessages, { text: 'Here is some information about our services.', sender: 'bot', timestamp: new Date().toLocaleTimeString() }]);
      }, 1000);
    }
  };

  const handleSelectChat = (index) => {
    setSelectedChat(index);
  };

  const handleMenuClick = () => {
    setSidebarVisible(true);
  };

  const handleSidebarClose = () => {
    setSidebarVisible(false);
  };

  return (
    <div className="flex flex-col lg:flex-row h-screen">
      {/* Sidebar */}
      <Sidebar
        visible={sidebarVisible}
        onClose={handleSidebarClose}
        messages={messages}
        onSelectChat={handleSelectChat}
      />

      {/* Main Chat Area */}
      <div className="flex flex-col flex-grow">
        <ChatHeader onMenuClick={handleMenuClick} />
        <ChatMessages messages={messages} />
        <ChatInput newMessage={newMessage} onChange={(e) => setNewMessage(e.target.value)} onSend={handleSend} />
      </div>
    </div>
  );
}

export default App;
