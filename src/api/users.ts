import { RxjsWrapper } from 'rxjs-ajax-wrapper';
import config from 'config';

const UsersAPI = new RxjsWrapper({
  register: {
    url: `${config.apiHost}/api/users`,
    method: 'POST',
    responseType: 'json',
  },
  getUser: {
    url: `${config.apiHost}/api/users`,
    method: 'GET',
    responseType: 'json',
  },
});

export default UsersAPI;
