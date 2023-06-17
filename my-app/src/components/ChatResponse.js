import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import person from './img/🦆 icon _user_.png';
import msg from './img/🦆 icon _message_.png';

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
          <div className="container">
                <div className="conv">
                    <img src={msg} alt="msg" />
                    <h3>Toothache</h3>
                </div>
            </div>
            <div className="container">
                <div className="conv">
                    <img src={msg} alt="msg" />
                    <h3>Back Pain</h3>
                </div>
            </div>
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
        <form className="user-input" onSubmit={handleUserSubmit}>
            <div className= "feed">
                
            </div>
          <div className="search-query">
            <h3>I have a toothache on the upper right and back side of my mouth. 
                I have been feeling it consistently for about 3 days, and for the most part, 
                it's an aching sensation, but that has changed recently to be an extremely jarring and 
                sharp pain. Is there anything I can do? And is it serious?
            </h3>
          </div>
          <div className="response">
            <h3>
              Hi [user]. I have noted your concern and pulled these articles 
              from the web for you. These are the most common reasons for your 
              tooth pain and aches. I am not a medical professional, and therefore 
              cannot diagnose you. I have, however, found medical personnel on our site 
              who are available for consultation within the next 12 hours. Here are their 
              profiles: —
            </h3>
          </div>
          <div></div>
          <div className="candidate">
            <img src={person} alt="candidate" />
            <div className="text-container">
              <h3>Lorem Ipsum</h3>
              <p>Lorem Ipsum is simply dummy text of the printing.</p>
            </div>
          </div>
          <div className="candidate">
            <img src={person} alt="candidate" />
            <div className="text-container">
              <h3>Lorem Ipsum</h3>
              <p>Lorem Ipsum is simply dummy text of the printing.</p>
            </div>
          </div>
          <h1>...</h1>
          <div className="space"></div>
          <div className="input-bar">
            <div className="input-container">
              <input
                type="text"
                value={userInput}
                onChange={handleUserInput}
                placeholder="Type your question here"
              />
              <button type="submit">></button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChatPage;