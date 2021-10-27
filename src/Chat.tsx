import React from 'react';
import './style/Chat.css';
import Message from './Message';

const Chat = () => {
  function erz() {
  }

  erz();
  return (
    <div className="chat_content">
      <div className="channel_header">
        <h2>I am the header</h2>
      </div>
      <div className="chat_messages">
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
      </div>
      <div className="chat_input">
        <form>
          <input placeholder="Write your message" />
          <button type="submit">Send message</button>
        </form>
      </div>
    </div>

  );
};

export default Chat;
