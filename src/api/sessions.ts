import { RxjsWrapper } from 'rxjs-ajax-wrapper';
import config from 'config';

const SessionsAPI = new RxjsWrapper({
  login: {
    url: `${config.apiHost}/api/sessions`,
    method: 'POST',
    responseType: 'json',
  },
  getSession: {
    url: `${config.apiHost}/api/sessions`,
    method: 'GET',
    responseType: 'json',
  },
  deleteSession: {
    url: `${config.apiHost}/api/sessions/:sessionId`,
    method: 'DELETE',
    responseType: 'json',
  },
});

export default SessionsAPI;
