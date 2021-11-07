import React from 'react';
import '../style/Chat.css';
import Message from './Message';

const Chat = () => {
  const [messages] = React.useState('');
  const [ae, setAe] = React.useState('');
  // const [theArray] = React.useState<string[]>([]);

  const handleKeyDown = (event : any) => {
    if (event.key === 'Enter') {
      setAe(event.target.value);
    }
  };

  // const tzs = (event) => {
  //   setTheArray([...theArray, `Entry ${event}`]);
  // };

  React.useEffect(() => {
    console.log();
  }, [messages]);
  return (
    <div className="chat_content">
      <div className="channel_header">
        <h2>I am the header</h2>
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
        <form>
          <input placeholder="Write your message" onKeyDown={(e) => handleKeyDown(e)} />
          {/* <button type="button">Send message</button> */}
        </form>
      </div>
    </div>

  );
};

export default Chat;
