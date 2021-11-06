import createActionsTypes from 'utils/actions';
import api from 'api';

type JoinRoomRequestType = {
  roomId: string
}

const JOIN_ROOM = createActionsTypes('JOIN_ROOM');
const joinRoom = (payload: any) => ({ type: JOIN_ROOM.REQUEST, payload });
const joinRoomFulfilled = (payload: any) => ({ type: JOIN_ROOM.FULFILLED, payload });
const joinRoomCancelled = (payload: any) => ({ type: JOIN_ROOM.CANCELLED, payload });
const joinRoomRejected = (payload: any) => ({ type: JOIN_ROOM.REJECTED, payload });
const joinRoomRequest = (payload: JoinRoomRequestType) => api.resources.rooms.joinRoom({
  params: payload,
});

export {
  JOIN_ROOM,
  joinRoom,
  joinRoomFulfilled,
  joinRoomCancelled,
  joinRoomRejected,
  joinRoomRequest,
};
