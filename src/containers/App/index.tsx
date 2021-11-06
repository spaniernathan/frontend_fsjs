import React, { PropsWithChildren } from 'react';
import { connect } from 'react-redux';
import SideNavbar from '../../components/SideNavbar';
import { UserType, AuthType, RoomType } from '../../types';

interface AppProps {
  user: UserType
  auth: AuthType
  room: {
    rooms: Array<RoomType>
  }
}

const App = ({
  user, auth, room, children,
}: PropsWithChildren<AppProps>) => (
  <div>
    <div className="columns">
      <SideNavbar user={null} auth={auth} room={room} />
      <div className="column">
        <div className="container">
          { children }
        </div>
      </div>
    </div>
  </div>
);

const mapDispatchToProps = () => ({});

const mapStateToProps = (store: any) => {
  const { user, auth, room } = store;
  return ({
    user,
    auth,
    room,
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
