import React from 'react';
import Add from '@mui/icons-material/Add';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Logout from '@mui/icons-material/Logout';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SideBarChannel from './SidebarChannel';
// import '../style/SideBar.css';
// import i18n from './i18n';
import AddChannelPopup from './AddPopup';
import SideBarContent from '../../components/Lobby/SideBar/SideBarContent';
import Profile from '../../components/Lobby/SideBar/SideBarProfileInformation/Profile';
import ProfileInformation from '../../components/Lobby/SideBar/SideBarProfileInformation/ProfileInformation';
import ScrollView from '../../components/Lobby/SideBar/ScrollView';
import SideBarChannels from '../../components/Lobby/SideBar/SideBarChannels/SideBarChannels';
import SideBarChannelsHeader from '../../components/Lobby/SideBar/SideBarChannels/SideBarChannelsHeader';
import SideBarChannelsTitle from '../../components/Lobby/SideBar/SideBarChannels/SideBarChannelsTitle';
import SideBarChannelsAppName from '../../components/Lobby/SideBar/SideBarChannels/SideBarChannelsAppName';

const SideBar = () => {
  const [showResults, setShowResults] = React.useState(true);
  const [showPopup, setShowPopup] = React.useState(false);

  const renderPopup = () => {
    setShowPopup(!showPopup);
    console.log('pop');
  };

  const onClicks = () => setShowResults(!showResults);
  return (
    <SideBarContent className="is-flex is-flex-direction-column is-clipped">
      <Profile className="is-flex is-justify-content-space-between is-align-items-center">
        <ProfileInformation className="is-flex is-justify-content-flex-start is-align-items-center">
          <AccountCircleIcon className="mr-2" />
          <h3>zaezf</h3>
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
                <SideBarChannel name="za" id="0" />
                <SideBarChannel name="Twitter" id="1" />
                <SideBarChannel name="Twitch" id="2" />
                <SideBarChannel name="Google" id="3" />
                <SideBarChannel name="Inst" id="4" />
                <SideBarChannel name="Ytb" id="0" />
                <SideBarChannel name="Twitter" id="1" />
                <SideBarChannel name="Twitch" id="2" />
                <SideBarChannel name="Google" id="3" />
                <SideBarChannel name="Inst" id="4" />
                <SideBarChannel name="Ytb" id="0" />
                <SideBarChannel name="Twitter" id="1" />
                <SideBarChannel name="Twitch" id="2" />
                <SideBarChannel name="Google" id="3" />
                <SideBarChannel name="Inst" id="4" />
                <SideBarChannel name="Ytb" id="0" />
                <SideBarChannel name="Twitter" id="1" />
                <SideBarChannel name="Twitch" id="2" />
                <SideBarChannel name="Google" id="3" />
                <SideBarChannel name="Inst" id="4" />
                <SideBarChannel name="Ytb" id="0" />
                <SideBarChannel name="Twitter" id="1" />
                <SideBarChannel name="Twitch" id="2" />
                <SideBarChannel name="Google" id="3" />
                <SideBarChannel name="Inst" id="4" />
                <SideBarChannel name="Ytb" id="0" />
                <SideBarChannel name="Twitter" id="1" />
                <SideBarChannel name="Twitch" id="2" />
                <SideBarChannel name="Google" id="3" />
                <SideBarChannel name="Inst" id="4" />
                <SideBarChannel name="Ytb" id="0" />
                <SideBarChannel name="Twitter" id="1" />
                <SideBarChannel name="Twitch" id="2" />
                <SideBarChannel name="Google" id="3" />
                <SideBarChannel name="Inst" id="4" />
                <SideBarChannel name="Ytb" id="0" />
                <SideBarChannel name="Twitter" id="1" />
                <SideBarChannel name="Twitch" id="2" />
                <SideBarChannel name="Google" id="3" />
                <SideBarChannel name="Inst" id="4" />
                <SideBarChannel name="Ytb" id="0" />
                <SideBarChannel name="Twitter" id="1" />
                <SideBarChannel name="Twitch" id="2" />
                <SideBarChannel name="Google" id="3" />
                <SideBarChannel name="Inst" id="4" />
                <SideBarChannel name="Ytb" id="0" />
                <SideBarChannel name="Twitter" id="1" />
                <SideBarChannel name="Twitch" id="2" />
                <SideBarChannel name="Google" id="3" />
                <SideBarChannel name="Inst" id="4" />
                <SideBarChannel name="Ytb" id="0" />
                <SideBarChannel name="Twitter" id="1" />
                <SideBarChannel name="Twitch" id="2" />
                <SideBarChannel name="Google" id="3" />
                <SideBarChannel name="Inst" id="4" />
              </div>
            )
            : null}
          {/* <div className="sidebar_content_header"> */}
          <AddChannelPopup title="title1" show={showPopup} onClose={renderPopup} addChannel />
        </SideBarChannels>
      </ScrollView>
      <SideBarChannelsAppName className="is-flex-direction-row is-align-items-center is-justify-content-center is-inline-flex">
        <h2>M&apos;enFou</h2>
      </SideBarChannelsAppName>
    </SideBarContent>
  );
};

export default SideBar;
