import { GET_USER } from '../actions';

type InitialStateType = {
  id: string
  displayName: string
};

const initialState: InitialStateType = {
  id: '',
  displayName: '',
};

const userReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case GET_USER.FULFILLED:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
