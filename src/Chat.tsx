import React from 'react';
import ManageAccounts from '@mui/icons-material/ManageAccounts';
import './style/Chat.css';
import Message from './Message';
import AddChannelPopup from './AddChannelPopup';

const Chat = () => {
  const [messages] = React.useState('');
  const [ae, setAe] = React.useState('');
  // const [theArray] = React.useState<string[]>([]);
  const [showPopup, setShowPopup] = React.useState(false);

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      console.log(event.target.value);
      alert(event.target.value);
      setAe(event.target.value);
    }
  };

  const openAddUserPopup = () => setShowPopup(!showPopup);

  React.useEffect(() => {
  }, [messages]);

  return (
    <div className="chat_content">
      <div className="channel_header">
        <h2 className="title_header">I am the header</h2>
        <div onClick={openAddUserPopup} role="button" tabIndex={0} onKeyDown={openAddUserPopup}>
          <ManageAccounts className="edit" />
        </div>
      </div>
      <div className="chat_messages">
        <p>
          EAZ
          {ae}
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
        <form className="chatForm">
          <input placeholder="Write your message" onKeyDown={(e) => handleKeyDown(e)} />
          <button type="submit">Send message</button>
        </form>
      </div>
      <AddChannelPopup title="title1" show={showPopup} onClose={openAddUserPopup} addChannel={false} />
    </div>

  );
};

export default Chat;
