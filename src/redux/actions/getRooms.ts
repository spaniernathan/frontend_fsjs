import createActionsTypes from 'utils/actions';
import api from 'api';

const GET_ROOMS = createActionsTypes('GET_ROOMS');
const getRooms = () => ({ type: GET_ROOMS.REQUEST });
const getRoomsFulfilled = (payload: any) => ({ type: GET_ROOMS.FULFILLED, payload });
const getRoomsCancelled = (payload: any) => ({ type: GET_ROOMS.CANCELLED, payload });
const getRoomsRejected = (payload: any) => ({ type: GET_ROOMS.REJECTED, payload });
const getRoomsRequest = () => api.resources.rooms.getRooms();

export {
  GET_ROOMS,
  getRooms,
  getRoomsFulfilled,
  getRoomsCancelled,
  getRoomsRejected,
  getRoomsRequest,
};
