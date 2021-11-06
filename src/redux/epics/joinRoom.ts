import { of, race } from 'rxjs';
import { ofType, Epic } from 'redux-observable';
import {
  mergeMap, flatMap, take, catchError,
} from 'rxjs/operators';
import {
  JOIN_ROOM,
  joinRoomFulfilled,
  joinRoomCancelled,
  joinRoomRejected,
  joinRoomRequest,
} from '../actions';

const joinRoomEpic: Epic<any> = (action$) => action$.pipe(
  ofType(JOIN_ROOM.REQUEST),
  mergeMap((action: any) => race(
    joinRoomRequest(action.payload).pipe(
      flatMap((response: any) => of(joinRoomFulfilled({ response }))),
      catchError((error) => of(joinRoomRejected(error))),
    ),
    action$.pipe(
      ofType(JOIN_ROOM.REQUEST),
      flatMap(() => of(joinRoomCancelled(action.payload))),
      take(1),
    ),
  )),
);

export default joinRoomEpic;
