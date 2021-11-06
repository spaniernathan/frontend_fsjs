import createActionsTypes from 'utils/actions';
import api from 'api';

type CreateRoomRequestType = {
  roomName: string
};

const CREATE_ROOM = createActionsTypes('CREATE_ROOM');
const createRoom = (payload: any) => ({ type: CREATE_ROOM.REQUEST, payload });
const createRoomFulfilled = (payload: any) => ({ type: CREATE_ROOM.FULFILLED, payload });
const createRoomCancelled = (payload: any) => ({ type: CREATE_ROOM.CANCELLED, payload });
const createRoomRejected = (payload: any) => ({ type: CREATE_ROOM.REJECTED, payload });
const createRoomRequest = (payload: CreateRoomRequestType) => api.resources.rooms.createRoom({
  body: payload,
});

export {
  CREATE_ROOM,
  createRoom,
  createRoomFulfilled,
  createRoomCancelled,
  createRoomRejected,
  createRoomRequest,
};
