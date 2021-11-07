import createActionsTypes from 'utils/actions';

const CHANGE_LANGUAGE = createActionsTypes('CHANGE_LANGUAGE');
const changeLanguage = (payload: any) => ({ type: CHANGE_LANGUAGE.FULFILLED, payload });

export {
  CHANGE_LANGUAGE,
  changeLanguage,
};
