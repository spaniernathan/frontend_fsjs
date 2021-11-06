import { RxjsWrapper } from 'rxjs-ajax-wrapper';
import config from 'config';

const RoomsAPI = new RxjsWrapper({
  createRoom: {
    url: `${config.apiHost}/api/rooms`,
    method: 'POST',
    responseType: 'json',
  },
  getRooms: {
    url: `${config.apiHost}/api/rooms`,
    method: 'GET',
    responseType: 'json',
  },
  joinRoom: {
    url: `${config.apiHost}/api/rooms/:roomId`,
    method: 'POST',
    responseType: 'json',
  },
  deleteRoom: {
    url: `${config.apiHost}/api/rooms/:roomId`,
    method: 'DELETE',
    responseType: 'json',
  },
});

export default RoomsAPI;
