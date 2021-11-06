import React, { PropsWithChildren } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { UserType, RoomType, AuthType } from '../../types';
import Room from '../Room';

interface SideNavbarProps {
  user: UserType | null
  auth: AuthType | null
  room: {
    rooms: Array<RoomType>
  }
  logout: any,
}

const SideNavbarWithoutUser = () => (
  <div className="columns is-vcentered is-centered">
    <div className="column">
      <Link to="login" className="button is-primary">Login</Link>
    </div>
    <div className="column">
      <Link to="register" className="button is-primary">Register</Link>
    </div>
  </div>
);

const SideNavbarWithUser = ({
  user, auth, room, logout,
}: PropsWithChildren<SideNavbarProps>) => {
  console.log(user, auth);
  return (
    <div className="">
      {room.rooms.map((r) => (
        <Room key={r.id} room={r} />
      ))}
      <div>
        <button type="button" onClick={() => logout}>
          logout
        </button>
      </div>
    </div>
  );
};

const SideNavbar = ({
  user, auth, room, logout,
}: PropsWithChildren<SideNavbarProps>) => (
  <div className="column is-3" style={{ height: '100vh' }}>
    <div>Home</div>
    { auth && user ? (
      <SideNavbarWithUser user={user} auth={auth} room={room} logout={logout} />
    ) : (
      <SideNavbarWithoutUser />
    )}
  </div>
);

const mapDispatchToProps = (dispatch: any) => ({
  logout: () => dispatch({ type: 'LOGOUT' }),
});

export default connect(null, mapDispatchToProps)(SideNavbar);
