import createActionsTypes from 'utils/actions';

const SET_SOCKET = createActionsTypes('SET_SOCKET');
const setSocket = (socket: any) => ({ type: SET_SOCKET.FULFILLED, socket });

export {
  SET_SOCKET,
  setSocket,
};
