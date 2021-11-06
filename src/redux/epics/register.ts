import { of, race } from 'rxjs';
import { ofType, Epic } from 'redux-observable';
import {
  mergeMap, flatMap, take, catchError,
} from 'rxjs/operators';
import {
  REGISTER,
  registerFulfilled,
  registerCancelled,
  registerRejected,
  registerRequest,
} from '../actions';

const registerEpic: Epic<any> = (action$) => action$.pipe(
  ofType(REGISTER.REQUEST),
  mergeMap((action: any) => race(
    registerRequest(action.payload).pipe(
      flatMap((response: any) => of(registerFulfilled({ response }))),
      catchError((error) => of(registerRejected(error))),
    ),
    action$.pipe(
      ofType(REGISTER.REQUEST),
      flatMap(() => of(registerCancelled(action.payload))),
      take(1),
    ),
  )),
);

export default registerEpic;
