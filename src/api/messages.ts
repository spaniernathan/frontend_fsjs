import { RxjsWrapper } from 'rxjs-ajax-wrapper';
import config from 'config';

const RoomsAPI = new RxjsWrapper({
  getRoomMessages: {
    url: `${config.apiHost}/api/rooms/:roomId/messages`,
    method: 'GET',
    responseType: 'json',
  },
});

export default RoomsAPI;
