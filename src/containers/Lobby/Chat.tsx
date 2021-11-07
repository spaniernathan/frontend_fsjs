import React from 'react';
import ManageAccounts from '@mui/icons-material/ManageAccounts';
// import '../style/Chat.css';
import Message from './Message';
import AddUserPopup from './AddPopup';
import ChatContent from '../../components/Lobby/Chat/ChatContent';
import ChatHeader from '../../components/Lobby/Chat/ChatHeader';
import ChatMessages from '../../components/Lobby/Chat/ChatMessage';
import TextBox from '../../components/Lobby/Chat/TextBox';
import WriteMessage from '../../components/Lobby/Chat/WriteMessage';
import Form from '../../components/Lobby/Chat/Form';

const Chat = () => {
  // const [messages] = React.useState('');
  const [message, setMessage] = React.useState('');
  // const [theArray] = React.useState<string[]>([]);
  const [showPopup, setShowPopup] = React.useState(false);

  const handleKeyDown = (event : any) => {
    if (event.key === 'Enter') {
      setMessage(event.target.value);
    }
  };

  // const tzs = (event) => {
  //   setTheArray([...theArray, `Entry ${event}`]);
  // };
  const openAddUserPopup = () => setShowPopup(!showPopup);

  // React.useEffect(() => {
  //   console.log();
  // }, [messages]);
  return (
    <ChatContent className="is-flex is-flex-direction-column is-justify-content-center is-align-items-center">
      <ChatHeader className="is-flex is-justify-content-space-between is-align-items-center ">
        <h2>I am the header</h2>
        <div onClick={openAddUserPopup} role="button" tabIndex={0} onKeyDown={openAddUserPopup}>
          <ManageAccounts />
        </div>
      </ChatHeader>
      <ChatMessages className="is-flex is-flex-direction-column-reverse">
        <p>
          EAZ
          {message}
        </p>
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

export default Chat;
