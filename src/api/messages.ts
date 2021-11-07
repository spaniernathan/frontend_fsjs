import { RxjsWrapper } from 'rxjs-ajax-wrapper';
import config from 'config';

const MessagesAPI = new RxjsWrapper({
  getRoomMessages: {
    url: `${config.apiHost}/api/rooms/:roomId/messages`,
    method: 'GET',
    responseType: 'json',
  },
});

export default MessagesAPI;
