import React from 'react';
import Chat from './Chat';
import SideBar from './SideBar';
import '../style/Home.css';

const Lobby = () => (
  <div className="App">
    <div className="sidebar">
      <SideBar />
    </div>
    <div className="chat1">
      <Chat />
    </div>
  </div>
);

export default Lobby;
