import createActionsTypes from 'utils/actions';
import api from 'api';

type LoginRequestType = {
  email: string
  password: string
}

const LOGIN = createActionsTypes('LOGIN');
const login = (payload: any) => ({ type: LOGIN.REQUEST, payload });
const loginFulfilled = (payload: any) => ({ type: LOGIN.FULFILLED, payload });
const loginCancelled = (payload: any) => ({ type: LOGIN.CANCELLED, payload });
const loginRejected = (payload: any) => ({ type: LOGIN.REJECTED, payload });
const loginRequest = (payload: LoginRequestType) => api.resources.sessions.login({
  body: { ...payload },
});

export {
  LOGIN,
  login,
  loginFulfilled,
  loginCancelled,
  loginRejected,
  loginRequest,
};
