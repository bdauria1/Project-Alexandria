import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ChatPage = () => {
  const [chats, setChats] = useState([]);

  // Fetch chat data from an API or any data source
  useEffect(() => {
    // Fetch the chat data and update the 'chats' state
    // Example:
    // const fetchedChats = fetchChats();
    // setChats(fetchedChats);
  }, []);

  return (
    <div className="chat-page">
      <div className="chat-sidebar">
        <h2>New Chats</h2>
        <ul className="chat-list">
          {chats.map(chat => (
            <li key={chat.id}>
              <Link to={`/chats/${chat.id}`}>{chat.title}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="chat-container">
        {/* Render the chat content based on the selected chat */}
        {/* Example: <ChatContent chatId={selectedChatId} /> */}
      </div>
    </div>
  );
};

export default ChatPage;
