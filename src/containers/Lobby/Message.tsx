import React from 'react';
// import '../style/Message.css';
import MessageContent from '../../components/Lobby/Message/Message';
import UserMessage from '../../components/Lobby/Message/UserMessage';
import MessageTimestamp from '../../components/Lobby/Message/MessageTimestamp';
import MessageText from '../../components/Lobby/Message/MessageText';

const Message = () => (
  <MessageContent className="message">
    <UserMessage>
      username
      <MessageTimestamp className="">this is a timestamp</MessageTimestamp>
    </UserMessage>
    <MessageText>zdefrthis is a timestampthis is timestampthis is a timestampthis is </MessageText>
  </MessageContent>
);

export default Message;
