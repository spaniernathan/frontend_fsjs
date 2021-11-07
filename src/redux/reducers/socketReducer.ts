import { SET_SOCKET } from 'redux/actions/socket';

type InitialStateType = {
  ws: any
};

const initialState: InitialStateType = {
  ws: null,
};

const socketReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_SOCKET.FULFILLED:
      return {
        ...state,
        ws: action.socket,
      };
    default:
      return state;
  }
};

export default socketReducer;
