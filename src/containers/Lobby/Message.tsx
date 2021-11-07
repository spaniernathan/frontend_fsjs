import React from 'react';
// import '../style/Message.css';
import MessageContent from '../../components/Lobby/Message/Message';
import UserMessage from '../../components/Lobby/Message/UserMessage';
import MessageTimestamp from '../../components/Lobby/Message/MessageTimestamp';
import MessageText from '../../components/Lobby/Message/MessageText';

type MessageProps = {
  message: {
    displayName: string
    createdAt: string
    value: string
  }
}

const Message = ({ message }: MessageProps) => {
  const { displayName, createdAt, value } = message;
  return (
    <MessageContent className="message">
      <UserMessage>
        {displayName}
        <MessageTimestamp className="">{createdAt}</MessageTimestamp>
      </UserMessage>
      <MessageText>{value}</MessageText>
    </MessageContent>
  );
};

export default Message;
