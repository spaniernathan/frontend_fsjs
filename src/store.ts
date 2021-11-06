import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { createEpicMiddleware } from 'redux-observable';
import rootReducer from './redux/reducers';
import rootEpic from './redux/epics';

const epicMiddleware = createEpicMiddleware();

const middleware = [thunk, epicMiddleware];

const configureStore = () => {
  const store = createStore(
    rootReducer,
    applyMiddleware(...middleware),
  );

  epicMiddleware.run(rootEpic);

  return store;
};

export default configureStore;
