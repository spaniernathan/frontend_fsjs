import React from 'react';
import './style/Home.css';
import SideBar from './SideBar';
import Chat from './Chat';

function MenFou() {
  return (
    <div className="App">
      <div className="sidebar">
        <SideBar />
      </div>
      <div className="chat1">
        <Chat />
      </div>
    </div>
  );
}

export default MenFou;
