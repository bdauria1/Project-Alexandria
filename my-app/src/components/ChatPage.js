import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import welcomeimage from './img/HEADER.png';

const ChatPage = () => {
  const [chats, setChats] = useState([]);
  const [userInput, setUserInput] = useState('');

  // Fetch chat data from an API or any data source
  useEffect(() => {
    // Fetch the chat data and update the 'chats' state
    // Example:
    // const fetchedChats = fetchChats();
    // setChats(fetchedChats);
  }, []);

  const handleUserInput = (event) => {
    setUserInput(event.target.value);
  };

  const handleUserSubmit = (event) => {
    event.preventDefault();
    // Handle user's question submission
    // Example:
    // const newChat = createNewChat(userInput);
    // setChats([...chats, newChat]);
    setUserInput('');
  };

  return (
    <div className="chat-container">
      <div className="chat-page">
        <div className="chat-sidebar">
          <h2>+ New Chat</h2>
          <ul className="chat-list">
            {chats.map((chat) => (
              <li key={chat.id}>
                <Link to={`/chats/${chat.id}`}>{chat.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="chat-content">
          {/* Render the chat content based on the selected chat */}
          {/* Example: <ChatContent chatId={selectedChatId} /> */}
        </div>
        <div className="welcome-image">
            <img src={welcomeimage} className="welcomelogo"/>
        </div>
        <form className="user-input" onSubmit={handleUserSubmit}>
          <div className="input-container">
            <input
              type="text"
              value={userInput}
              onChange={handleUserInput}
              placeholder="Type your question here"
            />
            <button type="submit">></button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChatPage;