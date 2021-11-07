import React, { PropsWithChildren, useEffect } from 'react';
import { connect } from 'react-redux';
import { getUser } from 'redux/actions';
import { setSocket } from 'redux/actions/socket';
import io from 'socket.io-client';
import config from '../../config';

interface AppProps {
  auth: any
  getUserAction: any
  setSocketAction: any
}
const App = ({
  auth, getUserAction, children, setSocketAction,
}: PropsWithChildren<AppProps>) => {
  useEffect(() => {
    setSocketAction(io(config.apiHost));
  }, []);
  useEffect(() => {
    getUserAction();
  }, [auth]);
  return (
    <div>
      { children }
    </div>
  );
};

const mapDispatchToProps = (dispatch: any) => ({
  getUserAction: () => dispatch(getUser()),
  setSocketAction: (ws: any) => dispatch(setSocket(ws)),
});

const mapStateToProps = (store: any) => {
  const { auth } = store;
  return ({
    auth,
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
