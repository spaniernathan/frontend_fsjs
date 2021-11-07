import React, { PropsWithChildren, useEffect } from 'react';
import { connect } from 'react-redux';
import { getUser } from 'redux/actions';

interface AppProps {
  auth: any
  getUserAction: any
}
const App = ({
  auth, getUserAction, children,
}: PropsWithChildren<AppProps>) => {
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
});

const mapStateToProps = (store: any) => {
  const { auth } = store;
  return ({
    auth,
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
