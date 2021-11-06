import { of, race } from 'rxjs';
import { ofType, Epic } from 'redux-observable';
import {
  mergeMap, flatMap, take, catchError,
} from 'rxjs/operators';
import {
  CREATE_ROOM,
  createRoomFulfilled,
  createRoomCancelled,
  createRoomRejected,
  createRoomRequest,
} from '../actions';

const createRoomEpic: Epic<any> = (action$) => action$.pipe(
  ofType(CREATE_ROOM.REQUEST),
  mergeMap((action: any) => race(
    createRoomRequest(action.payload).pipe(
      flatMap((response: any) => of(createRoomFulfilled({ response }))),
      catchError((error) => of(createRoomRejected(error))),
    ),
    action$.pipe(
      ofType(CREATE_ROOM.REQUEST),
      flatMap(() => of(createRoomCancelled(action.payload))),
      take(1),
    ),
  )),
);

export default createRoomEpic;
