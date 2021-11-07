import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Chat from './Chat';
import SideBar from './SideBar';
import HomeSideBar from '../../components/Lobby/HomeSideBar';
import HomeSideChat from '../../components/Lobby/HomeSideChat';
import { getRooms } from '../../redux/actions';

type LobbyProps = {
  getRoomsAction: any
  ws: any
  room: any
}

const Lobby = ({
  getRoomsAction, ws, room,
}: LobbyProps) => {
  const [selectedRoom, setRoom] = useState(null);
  useEffect(() => {
    getRoomsAction();
  }, []);
  useEffect(() => {
    if (room.rooms && ws) {
      Object.keys(room.rooms).forEach((key: any) => {
        ws.emit('join_room', { roomUuid: room.rooms[key].uuid });
      });
    }
  }, [room]);
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

const mapStateToProps = (store: any) => {
  const { ws, room } = store;
  return ({
    ws: ws.ws,
    room,
  });
};

const mapDispatchToProps = (dispatch: any) => ({
  getRoomsAction: () => dispatch(getRooms()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Lobby);
