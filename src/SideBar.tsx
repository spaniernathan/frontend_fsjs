import React from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Logout from '@mui/icons-material/Logout';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SideBarChannel from './SidebarChannel';
import './style/SideBar.css';
import i18n from './i18n';

const SideBar = () => {
  const [showResults, setShowResults] = React.useState(true);

  const onClicks = () => setShowResults(!showResults);
  return (
    <div className="sidebarContent">
      <div className="profile">
        <div className="profileInformation">
          <AccountCircleIcon className="avatar" />
          <div className="profile_information">
            <h3>zaezf</h3>
            <p>zaezf</p>
          </div>
        </div>
        <Logout className="logout" />
      </div>
      <div className="scrollView">
        <div className="sidebar_channels_title">
          <div className="sidebar_content_header">
            <div role="button" tabIndex={0} className="sidebar_channels_header" onClick={onClicks} onKeyDown={onClicks}>
              <ExpandMoreIcon />
              <h4 className="textChannels">{i18n.t('textChannels')}</h4>
            </div>
          </div>
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
          <div className="sidebar_content_header">
            <div role="button" tabIndex={0} className="sidebar_channels_header">
              <ExpandMoreIcon />
              <h5 className="textChannels">{i18n.t('UsersChannel')}</h5>
            </div>
          </div>

        </div>
      </div>
      <div className="sidebar_bottom">
        <ExpandMoreIcon />
        <h2>M&apos;enFou</h2>
      </div>
    </div>
  );
};

export default SideBar;
