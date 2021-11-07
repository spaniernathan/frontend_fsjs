import createActionsTypes from 'utils/actions';
import api from 'api';

const GET_USER = createActionsTypes('GET_USER');
const getUser = () => ({ type: GET_USER.REQUEST });
const getUserFulfilled = (payload: any) => ({ type: GET_USER.FULFILLED, payload });
const getUserCancelled = (payload: any) => ({ type: GET_USER.CANCELLED, payload });
const getUserRejected = (payload: any) => ({ type: GET_USER.REJECTED, payload });
const getUserRequest = () => api.resources.users.getUser({});

export {
  GET_USER,
  getUser,
  getUserFulfilled,
  getUserCancelled,
  getUserRejected,
  getUserRequest,
};
