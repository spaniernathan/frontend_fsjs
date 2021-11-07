import React, { useState } from 'react';
import Add from '@mui/icons-material/Add';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Logout from '@mui/icons-material/Logout';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { createRoom } from 'redux/actions';
import { connect } from 'react-redux';
import SideBarChannel from './SidebarChannel';
import AddChannelPopup from './AddPopup';
import SideBarContent from '../../components/Lobby/SideBar/SideBarContent';
import Profile from '../../components/Lobby/SideBar/SideBarProfileInformation/Profile';
import ProfileInformation from '../../components/Lobby/SideBar/SideBarProfileInformation/ProfileInformation';
import ScrollView from '../../components/Lobby/SideBar/ScrollView';
import SideBarChannels from '../../components/Lobby/SideBar/SideBarChannels/SideBarChannels';
import SideBarChannelsHeader from '../../components/Lobby/SideBar/SideBarChannels/SideBarChannelsHeader';
import SideBarChannelsTitle from '../../components/Lobby/SideBar/SideBarChannels/SideBarChannelsTitle';
import SideBarChannelsAppName from '../../components/Lobby/SideBar/SideBarChannels/SideBarChannelsAppName';

type SidebarProps = {
  room: any
  user: any
  createRoomAction: any
  setRoom: any
  selectedRoom: any
};

const SideBar = ({
  room, createRoomAction, setRoom, selectedRoom, user,
}: SidebarProps) => {
  const [showResults, setShowResults] = useState(true);
  const [showPopup, setShowPopup] = useState(false);

  const renderPopup = () => {
    setShowPopup(!showPopup);
  };

  const onClicks = () => setShowResults(!showResults);

  return (
    <SideBarContent className="is-flex is-flex-direction-column is-clipped">
      <Profile className="is-flex is-justify-content-space-between is-align-items-center">
        <ProfileInformation className="is-flex is-justify-content-flex-start is-align-items-center">
          <AccountCircleIcon className="mr-2" />
          <h3>{user.displayName}</h3>
        </ProfileInformation>
        <Logout />
      </Profile>
      <ScrollView>
        <SideBarChannels>
          <SideBarChannelsHeader className="is-flex is-justify-content-space-between is-align-items-center">
            <SideBarChannelsTitle role="button" tabIndex={0} className="is-flex is-align-items-center is-justify-content-center" onClick={onClicks} onKeyDown={onClicks}>
              <ExpandMoreIcon />
              {/* <h4 className="textChannels">{i18n.t('textChannels')}</h4> */}
              <h4 className="textChannels">Channels</h4>
            </SideBarChannelsTitle>
            <div onClick={renderPopup} role="button" tabIndex={0} onKeyDown={onClicks}>
              <Add className="addIcon" />
            </div>
          </SideBarChannelsHeader>
          {showResults
            ? (
              <div className="channels_list">
                { room.rooms && Object.keys(room.rooms).map((key: any) => (
                  <SideBarChannel
                    key={room.rooms[key].uuid}
                    keyValue={room.rooms[key].uuid}
                    name={room.rooms[key].roomName}
                    id={room.rooms[key].uuid}
                    onClick={() => { setRoom(room.rooms[key]); }}
                  />
                )) }
              </div>
            )
            : null}
          <AddChannelPopup
            show={showPopup}
            setShow={setShowPopup}
            action={createRoomAction}
            addChannel
          />
        </SideBarChannels>
      </ScrollView>
      <SideBarChannelsAppName className="is-flex-direction-row is-align-items-center is-justify-content-center is-inline-flex">
        <h2>M&apos;enFou</h2>
      </SideBarChannelsAppName>
    </SideBarContent>
  );
};

const mapStateToProps = (store: any) => {
  const { auth, user, room } = store;
  return {
    auth,
    user,
    room,
  };
};

const mapDispatchToProps = (dispatch: any) => ({
  createRoomAction: (payload: any) => dispatch(createRoom(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);
