import createActionsTypes from 'utils/actions';
import api from 'api';

type RegisterRequestType = {
  email: string
  password: string
  displayName: string
}

const REGISTER = createActionsTypes('REGISTER');
const register = (payload: any) => ({ type: REGISTER.REQUEST, payload });
const registerFulfilled = (payload: any) => ({ type: REGISTER.FULFILLED, payload });
const registerCancelled = (payload: any) => ({ type: REGISTER.CANCELLED, payload });
const registerRejected = (payload: any) => ({ type: REGISTER.REJECTED, payload });
const registerRequest = (payload: RegisterRequestType) => api.resources.users.register({
  body: { ...payload },
});

export {
  REGISTER,
  register,
  registerFulfilled,
  registerCancelled,
  registerRejected,
  registerRequest,
};
