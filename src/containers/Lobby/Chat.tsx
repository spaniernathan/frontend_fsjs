import React from 'react';
import ManageAccounts from '@mui/icons-material/ManageAccounts';
import '../style/Chat.css';
import Message from './Message';
import AddUserPopup from './AddPopup';

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
    <div className="chat_content">
      <div className="channel_header">
        <h2>I am the header</h2>
        <div onClick={openAddUserPopup} role="button" tabIndex={0} onKeyDown={openAddUserPopup}>
          <ManageAccounts className="edit" />
        </div>

      </div>
      <div className="chat_messages">
        <p className="test_message">
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
      </div>
      <div className="chat_input">
        <form>
          <input placeholder="Write your message" onKeyDown={(e) => handleKeyDown(e)} />
          {/* <button type="button">Send message</button> */}
        </form>
      </div>
      <AddUserPopup title="title1" show={showPopup} onClose={openAddUserPopup} addChannel={false} />

    </div>

  );
};

export default Chat;
