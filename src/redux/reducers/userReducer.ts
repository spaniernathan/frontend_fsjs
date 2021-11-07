import { GET_USER, CHANGE_LANGUAGE } from '../actions';

type InitialStateType = {
  id: string
  displayName: string
  language: string
};

const initialState: InitialStateType = {
  id: '',
  displayName: '',
  language: 'fr',
};

const userReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case GET_USER.FULFILLED:
      return {
        ...state,
        ...action.payload.response,
      };
    case CHANGE_LANGUAGE.FULFILLED:
      return {
        ...state,
        language: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
