import { combineReducers } from 'redux';
import authReducer from './authReducer';
import roomReducer from './roomReducer';
import userReducer from './userReducer';

export default combineReducers({
  auth: authReducer,
  room: roomReducer,
  user: userReducer,
});
