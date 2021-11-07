import { of, race } from 'rxjs';
import { ofType, Epic } from 'redux-observable';
import {
  mergeMap, flatMap, take, catchError,
} from 'rxjs/operators';
import {
  GET_ROOMS,
  getRoomsFulfilled,
  getRoomsCancelled,
  getRoomsRejected,
  getRoomsRequest,
} from '../actions';

const getRoomsEpic: Epic<any> = (action$) => action$.pipe(
  ofType(GET_ROOMS.REQUEST),
  mergeMap((action: any) => race(
    getRoomsRequest().pipe(
      flatMap((response: any) => of(getRoomsFulfilled({ response: response.response }))),
      catchError((error) => of(getRoomsRejected(error))),
    ),
    action$.pipe(
      ofType(GET_ROOMS.REQUEST),
      flatMap(() => of(getRoomsCancelled(action.payload))),
      take(1),
    ),
  )),
);

export default getRoomsEpic;
