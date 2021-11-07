import { of, race } from 'rxjs';
import { ofType, Epic } from 'redux-observable';
import {
  mergeMap, flatMap, take, catchError,
} from 'rxjs/operators';
import {
  GET_ROOM_MESSAGES,
  getRoomMessagesFulfilled,
  getRoomMessagesCancelled,
  getRoomMessagesRejected,
  getRoomMessagesRequest,
} from '../actions';

const getRoomMessagesEpic: Epic<any> = (action$) => action$.pipe(
  ofType(GET_ROOM_MESSAGES.REQUEST),
  mergeMap((action: any) => race(
    getRoomMessagesRequest(action.payload).pipe(
      flatMap((response: any) => of(() => {
        console.log(response);
        return getRoomMessagesFulfilled({ response: response.response });
      })),
      catchError((error) => of(getRoomMessagesRejected(error))),
    ),
    action$.pipe(
      ofType(GET_ROOM_MESSAGES.REQUEST),
      flatMap(() => of(getRoomMessagesCancelled(action.payload))),
      take(1),
    ),
  )),
);

export default getRoomMessagesEpic;
