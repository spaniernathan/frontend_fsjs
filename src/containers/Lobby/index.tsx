import React from 'react';
import Chat from './Chat';
import SideBar from './SideBar';
import HomeSideBar from '../../components/Lobby/HomeSideBar';
import HomeSideChat from '../../components/Lobby/HomeSideChat';

const Lobby = () => (
  <div className="is-flex">
    <HomeSideBar>
      <SideBar />
    </HomeSideBar>
    <HomeSideChat>
      <Chat />
    </HomeSideChat>
  </div>
);

export default Lobby;
