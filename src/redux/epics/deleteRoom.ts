import { of, race } from 'rxjs';
import { ofType, Epic } from 'redux-observable';
import {
  mergeMap, flatMap, take, catchError,
} from 'rxjs/operators';
import {
  DELETE_ROOM,
  deleteRoomFulfilled,
  deleteRoomCancelled,
  deleteRoomRejected,
  deleteRoomRequest,
} from '../actions';

const deleteRoomEpic: Epic<any> = (action$) => action$.pipe(
  ofType(DELETE_ROOM.REQUEST),
  mergeMap((action: any) => race(
    deleteRoomRequest(action.payload).pipe(
      flatMap((response: any) => of(deleteRoomFulfilled({ response }))),
      catchError((error) => of(deleteRoomRejected(error))),
    ),
    action$.pipe(
      ofType(DELETE_ROOM.REQUEST),
      flatMap(() => of(deleteRoomCancelled(action.payload))),
      take(1),
    ),
  )),
);

export default deleteRoomEpic;
