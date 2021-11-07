import { RoomType } from '../../types';
import {
  CREATE_ROOM, JOIN_ROOM, DELETE_ROOM, GET_ROOMS, GET_ROOM_MESSAGES,
} from '../actions';

type InitialStateType = {
  rooms: Array<RoomType>
  messages: any
};

const initialState: InitialStateType = {
  rooms: [],
  messages: {},
};

const roomReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case CREATE_ROOM.FULFILLED:
      return {
        ...state,
        rooms: [
          ...state.rooms,
          { ...action.payload.response },
        ],
      };
    case JOIN_ROOM.FULFILLED:
      return {
        ...state,
        rooms: [
          ...state.rooms,
          { ...action.payload.response },
        ],
      };
    case GET_ROOMS.FULFILLED:
      return {
        ...state,
        rooms: [
          ...state.rooms,
          ...action.payload.response,
        ],
      };
    case GET_ROOM_MESSAGES:
      return {
        ...state,
        messages: action.payload.response.reduce(
          (acc: any, curr: any) => ({ ...acc, [curr.roomUuid]: curr }), {},
        ),
      };
    case DELETE_ROOM.FULFILLED:
      return {
        ...state,
        rooms: [
          ...state.rooms.filter((room) => room.id === action.payload.id),
        ],
      };
    default:
      return state;
  }
};

export default roomReducer;
