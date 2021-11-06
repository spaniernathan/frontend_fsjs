import { LOGIN } from '../actions';

type InitialStateType = {
  accessToken: string | null
  refreshToken: string | null
};

const initialState: InitialStateType = {
  accessToken: null,
  refreshToken: null,
};

// localStorage.set(accessToken)
// localStorage.set(refreshToken)

const authReducer = (state = initialState, action: any) => {
  console.log('action:', action);
  switch (action.type) {
    case LOGIN.FULFILLED:
      return {
        ...state,
        ...action.payload,
      };
    case LOGIN.CANCELLED:
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
