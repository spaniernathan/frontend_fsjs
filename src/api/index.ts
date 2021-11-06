import { CombineWrappers } from 'rxjs-ajax-wrapper';
import UsersAPI from './users';
import SessionsAPI from './sessions';
import RoomsAPI from './rooms';

const Api = new CombineWrappers({
  rooms: RoomsAPI,
  sessions: SessionsAPI,
  users: UsersAPI,
});

Api.addRequestMiddlewares([
  {
    name: 'token',
    handler: () => ({
      headers: {
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        'x-refresh': `${localStorage.getItem('refreshToken')}`,
      },
    }),
  },
]);

export default Api;
