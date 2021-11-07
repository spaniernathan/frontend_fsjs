import { LOGIN, LOGOUT } from '../actions';

type InitialStateType = {
  accessToken: string | null
  refreshToken: string | null
};

const initialState: InitialStateType = {
  accessToken: localStorage.getItem('accessToken'),
  refreshToken: localStorage.getItem('refreshToken'),
};

const authReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case LOGIN.FULFILLED:
      localStorage.setItem('accessToken', action.payload.response.accessToken);
      localStorage.setItem('refreshToken', action.payload.response.refreshToken);
      return {
        ...state,
        ...action.payload.response,
      };
    case LOGOUT.FULFILLED:
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
      return {
        ...state,
        accessToken: null,
        refreshToken: null,
      };
    default:
      return state;
  }
};

export default authReducer;
