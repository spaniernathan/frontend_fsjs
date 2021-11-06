import { of, race } from 'rxjs';
import { ofType, Epic } from 'redux-observable';
import {
  mergeMap, flatMap, take, catchError,
} from 'rxjs/operators';
import {
  LOGIN,
  loginFulfilled,
  loginCancelled,
  loginRejected,
  loginRequest,
} from '../actions';

const loginEpic: Epic<any> = (action$) => action$.pipe(
  ofType(LOGIN.REQUEST),
  mergeMap((action: any) => race(
    loginRequest(action.payload).pipe(
      flatMap((response: any) => of(loginFulfilled({ response: response.response }))),
      catchError((error) => of(loginRejected(error))),
    ),
    action$.pipe(
      ofType(LOGIN.REQUEST),
      flatMap(() => of(loginCancelled(action.payload))),
      take(1),
    ),
  )),
);

export default loginEpic;
