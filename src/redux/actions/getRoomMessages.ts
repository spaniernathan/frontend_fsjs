import createActionsTypes from 'utils/actions';
import api from 'api';

type GetRoomMessagesRequestType = {
  roomId: string
}

const GET_ROOM_MESSAGES = createActionsTypes('GET_ROOM_MESSAGES');
const getRoomMessages = (payload: any) => ({ type: GET_ROOM_MESSAGES.REQUEST, payload });
const getRoomMessagesFulfilled = (payload: any) => ({ type: GET_ROOM_MESSAGES.FULFILLED, payload });
const getRoomMessagesCancelled = (payload: any) => ({ type: GET_ROOM_MESSAGES.CANCELLED, payload });
const getRoomMessagesRejected = (payload: any) => ({ type: GET_ROOM_MESSAGES.REJECTED, payload });
const getRoomMessagesRequest = (
  payload: GetRoomMessagesRequestType,
) => api.resources.messages.getRoomMessages({
  params: { ...payload },
});

export {
  GET_ROOM_MESSAGES,
  getRoomMessages,
  getRoomMessagesFulfilled,
  getRoomMessagesCancelled,
  getRoomMessagesRejected,
  getRoomMessagesRequest,
};
