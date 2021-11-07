import { RoomType } from '../../types';
import {
  CREATE_ROOM, JOIN_ROOM, DELETE_ROOM, GET_ROOMS,
} from '../actions';

type InitialStateType = {
  rooms: Array<RoomType>
};

const initialState: InitialStateType = {
  rooms: [],
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
