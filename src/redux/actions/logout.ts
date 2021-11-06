import createActionsTypes from 'utils/actions';

const LOGOUT = createActionsTypes('LOGOUT');
const logout = () => ({ type: LOGOUT.REQUEST });
const logoutFulfilled = () => ({ type: LOGOUT.FULFILLED });

export {
  LOGOUT,
  logout,
  logoutFulfilled,
};
