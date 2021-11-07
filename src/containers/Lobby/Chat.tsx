import React, { useEffect, useState } from 'react';
import ManageAccounts from '@mui/icons-material/ManageAccounts';
// import '../style/Chat.css';
import { connect } from 'react-redux';
import Message from './Message';
import AddUserPopup from './AddPopup';
import ChatContent from '../../components/Lobby/Chat/ChatContent';
import ChatHeader from '../../components/Lobby/Chat/ChatHeader';
import ChatMessages from '../../components/Lobby/Chat/ChatMessage';
import TextBox from '../../components/Lobby/Chat/TextBox';
import WriteMessage from '../../components/Lobby/Chat/WriteMessage';
import Form from '../../components/Lobby/Chat/Form';
import { getRoomMessages } from '../../redux/actions';

type ChatProps = {
  room: any
}

const Chat = ({ room }: ChatProps) => {
  // const [messages] = useState('');
  const [message, setMessage] = useState('');
  // const [theArray] = useState<string[]>([]);
  const [showPopup, setShowPopup] = useState(false);

  const handleKeyDown = (event : any) => {
    if (event.key === 'Enter') {
      // TODO: send message through socket.emit({ value, ownerId, roomId });
      setMessage(event.target.value);
    }
  };

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
          <WriteMessage className="is-align-content-space-between" placeholder="Write your message" onKeyDown={(e) => handleKeyDown(e)} />
          {/* <button type="button">Send message</button> */}
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

const mapDispatchToProps = (dispatch: any) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Chat);
