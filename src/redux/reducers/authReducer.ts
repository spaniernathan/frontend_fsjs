import { LOGIN, LOGOUT } from '../actionTypes';

type InitialStateType = {
  accessToken: string | null
  refreshToken: string | null
};

const initialState: InitialStateType = {
  accessToken: null,
  refreshToken: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      console.log(action);
      return {
        ...state,
        ...action.payload,
      };
    case LOGOUT:
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
