import React from 'react';
import Chat from '@mui/icons-material/Chat';
import PropTypes from 'prop-types';
import Channel from '../../components/Lobby/SideBar/SideBarChannels/Channel/Channel';

const SideBarChannel = ({ id, name }:any) => (
  <Channel className="is-flex is-align-items-center">
    <span><Chat className="icon" /></span>
    <div id={id}>
      <p>
        {id}
      </p>
      <p>
        {name}
      </p>

    </div>
  </Channel>
);

SideBarChannel.defaultProps = {
  id: 'id',
  name: 'name',
};

SideBarChannel.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
};

export default SideBarChannel;
