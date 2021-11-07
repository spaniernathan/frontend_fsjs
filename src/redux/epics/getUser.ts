import { of, race } from 'rxjs';
import { ofType, Epic } from 'redux-observable';
import {
  mergeMap, flatMap, take, catchError,
} from 'rxjs/operators';
import {
  GET_USER,
  getUserFulfilled,
  getUserCancelled,
  getUserRejected,
  getUserRequest,
} from '../actions';

const getUserEpic: Epic<any> = (action$) => action$.pipe(
  ofType(GET_USER.REQUEST),
  mergeMap((action: any) => race(
    getUserRequest().pipe(
      flatMap((response: any) => of(getUserFulfilled({ response: response.response }))),
      catchError((error) => of(getUserRejected(error))),
    ),
    action$.pipe(
      ofType(GET_USER.REQUEST),
      flatMap(() => of(getUserCancelled(action.payload))),
      take(1),
    ),
  )),
);

export default getUserEpic;
