import createActionsTypes from 'utils/actions';

const LOGOUT = createActionsTypes('LOGOUT');
const logout = () => ({ type: LOGOUT.FULFILLED });

export {
  LOGOUT,
  logout,
};
