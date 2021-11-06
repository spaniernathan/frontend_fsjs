import React, { PropsWithoutRef } from 'react';
import { useNavigate } from 'react-router-dom';

interface RoomProps {
  room: {
    id: string
    roomName: string
  }
}

const Room = ({ room }: PropsWithoutRef<RoomProps>) => {
  const navigate = useNavigate();
  return (
    <div
      role="button"
      aria-pressed="false"
      tabIndex={0}
      onKeyDown={() => navigate(`room/${room.id}`)}
      onClick={() => navigate(`room/${room.id}`)}
    >
      <p>{ room.roomName }</p>
    </div>
  );
};

export default Room;
