import React from 'react';
import { connect } from 'react-redux';
import SideNavbar from '../../components/SideNavbar';
import { UserType, AuthType, RoomType } from '../../types';

interface HomeProps {
  user: UserType
  auth: AuthType
  room: {
    rooms: Array<RoomType>
  }
}

const Home = ({ user, auth, room }: HomeProps) => {
  console.log(user);
  return (
    <div>
      <div className="columns">
        <SideNavbar user={null} auth={auth} room={room} />
        <div className="column">
          <div className="container">
            <p>Display room or nothing here</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = () => ({});

const mapStateToProps = (store) => {
  const { user, auth, room } = store;
  return ({
    user,
    auth,
    room,
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
