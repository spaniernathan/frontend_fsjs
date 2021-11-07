import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Chat from './Chat';
import SideBar from './SideBar';
import HomeSideBar from '../../components/Lobby/HomeSideBar';
import HomeSideChat from '../../components/Lobby/HomeSideChat';
import { getRooms } from '../../redux/actions';

type LobbyProps = {
  getRoomsAction: any
}

const Lobby = ({
  getRoomsAction,
}: LobbyProps) => {
  const [selectedRoom, setRoom] = useState(null);
  useEffect(() => {
    getRoomsAction();
  }, []);
  return (
    <div className="is-flex">
      <HomeSideBar>
        <SideBar setRoom={setRoom} selectedRoom={selectedRoom} />
      </HomeSideBar>
      <HomeSideChat>
        <Chat room={selectedRoom} />
      </HomeSideChat>
    </div>
  );
};

const mapDispatchToProps = (dispatch: any) => ({
  getRoomsAction: () => dispatch(getRooms()),
});

export default connect(null, mapDispatchToProps)(Lobby);
