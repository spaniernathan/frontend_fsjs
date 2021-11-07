import { combineEpics } from 'redux-observable';

import loginEpic from './login';
import registerEpic from './register';
import createRoomEpic from './createRoom';
import joinRoomEpic from './joinRoom';
import deleteRoomEpic from './deleteRoom';
import getUserEpic from './getUser';
import getRoomsEpic from './getRooms';

export default combineEpics(
  loginEpic,
  registerEpic,
  createRoomEpic,
  joinRoomEpic,
  deleteRoomEpic,
  getUserEpic,
  getRoomsEpic,
);
