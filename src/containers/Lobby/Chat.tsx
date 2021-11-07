import React, { useEffect, useState } from 'react';
import ManageAccounts from '@mui/icons-material/ManageAccounts';
// import '../style/Chat.css';
import { connect } from 'react-redux';
import io from 'socket.io-client';
import Message from './Message';
import AddUserPopup from './AddPopup';
import ChatContent from '../../components/Lobby/Chat/ChatContent';
import ChatHeader from '../../components/Lobby/Chat/ChatHeader';
import ChatMessages from '../../components/Lobby/Chat/ChatMessage';
import TextBox from '../../components/Lobby/Chat/TextBox';
import WriteMessage from '../../components/Lobby/Chat/WriteMessage';
import Form from '../../components/Lobby/Chat/Form';
// import { getRoomMessages } from '../../redux/actions';
import config from '../../config';

type ChatProps = {
  room: any
  user: any
}

const socket = io(config.apiHost);

const Chat = ({ room, user }: ChatProps) => {
  // const [messages] = useState('');
  const [message, setMessage] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  const handleKeyDown = async (event : any) => {
    if (event.key === 'Enter') {
      // TODO: send message through socket.emit({ value, ownerId, roomId });
      setMessage('');
      await socket.emit('message', {
        roomUuid: room.uuid,
        ownerUuid: user.uuid,
        value: message,
      });
      console.log(message);
    }
  };

  // useEffect(() => {
  //   if (socket) {

  //   }
  //   socket.on(room.uuid, (ReceiveData) => {

  //   });
  // }, [socket]);

  // const tzs = (event) => {
  //   setTheArray([...theArray, `Entry ${event}`]);
  // };
  const openAddUserPopup = () => setShowPopup(!showPopup);

  return (
    <ChatContent className="is-flex is-flex-direction-column is-justify-content-center is-align-items-center">
      <ChatHeader className="is-flex is-justify-content-space-between is-align-items-center ">
        <h2>I am the header</h2>
        <div onClick={openAddUserPopup} role="button" tabIndex={0} onKeyDown={openAddUserPopup}>
          <ManageAccounts />
        </div>
      </ChatHeader>
      <ChatMessages className="is-flex is-flex-direction-column-reverse">
        {
          room && room.messages && room.messages.map((m: any) => (
            <Message key={m.uuid} message={m} />
          ))
        }
      </ChatMessages>
      <TextBox className="is-justify-content-center is-align-items-center is-flex">
        <Form className="is-flex is-justify-content-center is-inline-block is-align-content-center">
          <WriteMessage className="is-align-content-space-between" placeholder="Write your message" value={message} onChange={(e) => setMessage(e.target.value)} onKeyDown={(e) => handleKeyDown(e)} />
          {/* <button type="button">Send message</button> */}
          {/* messageList.map => afficher le contenu */}
        </Form>
      </TextBox>
      <AddUserPopup title="title1" show={showPopup} onClose={openAddUserPopup} addChannel={false} />

    </ChatContent>

  );
};

const mapStateToProps = (store: any) => {
  const { user, room } = store;
  return {
    user,
    messages: room.messages,
  };
};

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Chat);
