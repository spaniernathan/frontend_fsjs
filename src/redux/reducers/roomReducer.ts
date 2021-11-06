import { RoomType } from '../../types';
import { CREATE_ROOM, JOIN_ROOM, LEAVE_ROOM } from '../actionTypes';

type InitialStateType = {
  rooms: Array<RoomType>
};

const initialState: InitialStateType = {
  rooms: [],
};

const roomReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_ROOM:
      return {
        ...state,
        rooms: [
          ...state.rooms,
          { ...action.payloed },
        ],
      };
    case JOIN_ROOM:
      return {
        ...state,
        rooms: [
          ...state.rooms,
          { ...action.payloed },
        ],
      };
    case LEAVE_ROOM:
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
