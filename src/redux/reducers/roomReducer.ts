import {
  CREATE_ROOM, JOIN_ROOM, GET_ROOMS, MSG_RECEIVED,
} from '../actions';

type InitialStateType = {
  rooms: any
};

const initialState: InitialStateType = {
  rooms: {},
};

const roomReducer = (state = initialState, action: any) => {
  console.log(action);
  switch (action.type) {
    case CREATE_ROOM.FULFILLED:
      return {
        ...state,
        rooms: {
          ...state.rooms,
          [action.payload.response.uuid]: { ...action.payload.response },
        },
      };
    case MSG_RECEIVED.FULFILLED:
      return {
        ...state,
        rooms: {
          ...state.rooms,
          [action.payload.roomUuid]: {
            ...state.rooms[action.payload.roomUuid],
            messages: [
              ...state.rooms[action.payload.roomUuid].messages,
              { ...action.payload },
            ],
          },
        },
      };
    case JOIN_ROOM.FULFILLED:
      return {
        ...state,
        rooms: {
          ...state.rooms,
          [action.payload.response.uuid]: { ...action.payload.response },
        },
      };
    case GET_ROOMS.FULFILLED:
      return {
        ...state,
        rooms: action.payload.response.reduce(
          (acc: any, curr: any) => ({ ...acc, [curr.uuid]: curr }), {},
        ),
      };
    default:
      return state;
  }
};

export default roomReducer;
