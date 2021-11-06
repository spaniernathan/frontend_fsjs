import createActionsTypes from 'utils/actions';
import api from 'api';

type DeleteRoomRequestType = {
  roomId: string
}

const DELETE_ROOM = createActionsTypes('DELETE_ROOM');
const deleteRoom = (payload: any) => ({ type: DELETE_ROOM.REQUEST, payload });
const deleteRoomFulfilled = (payload: any) => ({ type: DELETE_ROOM.FULFILLED, payload });
const deleteRoomCancelled = (payload: any) => ({ type: DELETE_ROOM.CANCELLED, payload });
const deleteRoomRejected = (payload: any) => ({ type: DELETE_ROOM.REJECTED, payload });
const deleteRoomRequest = (payload: DeleteRoomRequestType) => api.resources.rooms.deleteRoom({
  params: payload,
});

export {
  DELETE_ROOM,
  deleteRoom,
  deleteRoomFulfilled,
  deleteRoomCancelled,
  deleteRoomRejected,
  deleteRoomRequest,
};
