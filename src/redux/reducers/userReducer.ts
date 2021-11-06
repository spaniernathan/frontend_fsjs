import { FETCH_USER } from '../actionTypes';

type InitialStateType = {
  id: string
  displayName: string
};

const initialState: InitialStateType = {
  id: '',
  displayName: '',
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
