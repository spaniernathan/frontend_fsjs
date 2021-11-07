import React, { useState, useEffect } from 'react';
import ManageAccounts from '@mui/icons-material/ManageAccounts';
import { connect } from 'react-redux';
import { joinRoom, messageReceived } from 'redux/actions';
import moment from 'moment';
import AddUserPopup from './AddPopup';
import ChatContent from '../../components/Lobby/Chat/ChatContent';
import ChatHeader from '../../components/Lobby/Chat/ChatHeader';
import ChatMessages from '../../components/Lobby/Chat/ChatMessage';
import TextBox from '../../components/Lobby/Chat/TextBox';
import WriteMessage from '../../components/Lobby/Chat/WriteMessage';
import Form from '../../components/Lobby/Chat/Form';
import Message from './Message';

type ChatProps = {
  room: any
  user: any
  messageReceivedAction: any
  joinRoomAction: any
  ws: any
  roomState: any
}

const Chat = ({
  room, user, messageReceivedAction, ws, joinRoomAction, roomState,
}: ChatProps) => {
  const [message, setMessage] = useState('');
  const [show, setShow] = useState(false);

  const handleKeyDown = (event : any) => {
    if (event.key === 'Enter' && ws && message && room && user) {
      ws.emit('message', {
        roomUuid: room.uuid,
        ownerUuid: user.uuid,
        value: message,
      });
      setMessage('');
    }
  };

  useEffect(() => {
    if (room && ws) {
      ws.on('room.uuid', (data: any) => {
        messageReceivedAction(data);
      });
    }
  }, [room, ws]);

  return (
    <ChatContent className="is-flex is-flex-direction-column is-justify-content-center is-align-items-center">
      <ChatHeader className="is-flex is-justify-content-space-between is-align-items-center ">
        <p>{room && room.roomName}</p>
        <div onClick={() => setShow(!show)} role="button" tabIndex={0} onKeyDown={() => setShow(!show)}>
          <ManageAccounts />
        </div>
      </ChatHeader>
      <ChatMessages className="is-flex is-flex-direction-column-reverse">
        {
          room
          && roomState
          && roomState.rooms
          && roomState.rooms[room.uuid].messages
          && roomState.rooms[room.uuid].messages
            .map((m: any) => (
              <Message key={m.uuid} message={m} />
            ))
        }
      </ChatMessages>
      <TextBox className="is-justify-content-center is-align-items-center is-flex">
        <Form className="is-flex is-justify-content-center is-inline-block is-align-content-center">
          <WriteMessage
            className="is-align-content-space-between"
            placeholder="Write your message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={(e) => handleKeyDown(e)}
            disabled={!room}
          />
        </Form>
      </TextBox>
      <AddUserPopup
        show={show}
        setShow={setShow}
        action={joinRoomAction}
        addChannel={false}
      />
    </ChatContent>

  );
};

const mapStateToProps = (store: any) => {
  const { room, user, ws } = store;
  return {
    user,
    roomState: room,
    ws: ws.ws,
  };
};

const mapDispatchToProps = (dispatch: any) => ({
  messageReceivedAction: (payload: any) => dispatch(messageReceived(payload)),
  joinRoomAction: (payload: any) => dispatch(joinRoom(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Chat);
