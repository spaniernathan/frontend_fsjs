import React, { useState, useEffect } from "react";
import "./homepage.css";
import io from "socket.io-client";
import ScrollToBottom from "react-scroll-to-bottom";

const socket = io.connect("http://localhost:8000");

/* au lieu d'effectuer une connexion directement avec une websocket, 
cliquer sur le bouton create room
ce qui va creer la première websocket 

-> connexion direct au serveur des le depart et ensuite avec des room on decide de qui recoit quoi
-> client A connecte au serveur avec un id du client B et C et le serveur va effectuer la connexion avec ces clients B et C
*/
const Homepage = ({ setAuth, Name }) => {
  console.log("mon nom est " + Name);

  const [Message, setMessage] = useState("");
  const [messageList, setMessageList] = useState([]);
  const [userInvited, setUserInvited] = useState("");

  const onChange = (e) => {
    setMessage(e.target.value);
  };

  const getInvited = (e) => {
    setUserInvited(e.target.value);
  };

  let roomID = () => {
    return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
  }

  const createRoom = () => {
    socket.emit("join_room", roomID);
  };

  const inviteRoom = () => {
    socket.emit("invite", userInvited);
  };

  useEffect(() => {
    socket.on("receive_invite_room", (room) => {
      socket.join(room);
    });
  });

  const sendMessage = async () => {
    if (Message !== "") {
      const messageData = {
        message: Message,
        user: Name,
        time:
          new Date(Date.now()).getHours() +
          ":" +
          new Date(Date.now()).getMinutes(),
        socket: socket.id,
      };
      console.log(socket.id);
      await socket.emit("send_message", messageData);
      // setMessageList((list) => [...list, messageData]);
      setMessage("");
      console.log(messageData);
    }
  };

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setMessageList((list) => [...list, data]);
      //   console.log(data);
    });
  }, [socket]);

  const loggout = async (e) => {
    e.preventDefault();

    localStorage.removeItem("token");
    setAuth(false);
  };

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
      <div>
        <input
          type="text"
          placeholder="invite your mate"
          value={Message}
          onChange={(e) => getInvited(e)}
        />
        <button onClick={createRoom}>Join A Room</button>
      </div>
      <div>
        <button onClick={inviteRoom}>Invite user</button>
      </div>
      <div>
        <button onClick={(e) => loggout(e)}>Logout</button>
      </div>
    </div>
  );
  //   const [name, setName] = useState("");

  //   async function getName() {
  //     try {
  //       const response = await fetch("http://localhost:3001/home", {
  //         method: "GET",
  //         headers: { token: localStorage.token },
  //       });
  //       const parseRes = await response.json();
  //       setName(parseRes.username);
  //     } catch (error) {
  //         console.error(error.message);
  //     }
  //   }

  //   useEffect(() => {
  //     getName();
  //   }, []);

  //   return (
  //     <Fragment>
  //       <h1>Homepage {Name}</h1>
  //       <button onClick={(e) => loggout(e)}>Logout</button>
  //     </Fragment>
  //   );
};

export default Homepage;
