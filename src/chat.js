import React, { useState, useEffect } from "react";
import "./homepage.css";
import io from "socket.io-client";
import ScrollToBottom from "react-scroll-to-bottom";

const socket = io.connect("http://localhost:8000");

const Chat = ({ Name }) => {

    const [Message, setMessage] = useState("");
    const [messageList, setMessageList] = useState([]);

    const onChange = (e) => {
        setMessage(e.target.value);
    };

    const sendMessage = async () => {
        if (Message !== "") {
          const messageData = {
            message: Message,
            user: Name,
            time:
            new Date(Date.now()).getHours() +
            ":" +
            new Date(Date.now()).getMinutes(),
          };
    
          await socket.emit("send_message", messageData);
          // setMessageList((list) => [...list, messageData]);
          setMessage("");
          console.log(messageData);
        }
    };

    useEffect(() => {
        socket.on("receive_message", (data) => {
          setMessageList((list) => [...list, data]);
        });
      }, [socket]);

      return (
        <div className="chat-window">
          <div className="chat-header">
            <p>je suis {Name}</p>
          </div>
          <div className="chat-body">
            <ScrollToBottom className="message-container">
              {messageList.map((messageContent) => {
                return (
                  <div
                    className="message"
                    id={Name !== messageContent.user ? "you" : "other"}
                    >
                    <div>
                      <div className="message-content">
                        <p>{messageContent.message}</p>
                      </div>
                      <div className="message-meta">
                        <p id="time">{messageContent.time}</p>
                        <p id="author">{messageContent.user}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </ScrollToBottom>
          </div>
          <div className="chat-footer">
            <input
              type="text"
              placeholder="type your text"
              value={Message}
              onChange={(e) => onChange(e)}
              onKeyPress={(event) => {
                event.key === "Enter" && sendMessage();
              }}
            />
            <button onClick={sendMessage}>send</button>
          </div>
        </div>
    );
};

export default Chat;
