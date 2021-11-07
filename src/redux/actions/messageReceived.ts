import createActionsTypes from 'utils/actions';

const MSG_RECEIVED = createActionsTypes('MSG_RECEIVED');
const messageReceived = (payload: any) => ({ type: MSG_RECEIVED.FULFILLED, payload });

export {
  MSG_RECEIVED,
  messageReceived,
};
