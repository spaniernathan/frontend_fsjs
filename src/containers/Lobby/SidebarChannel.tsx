import React from 'react';
import Chat from '@mui/icons-material/Chat';
import PropTypes from 'prop-types';
import Channel from '../../components/Lobby/SideBar/SideBarChannels/Channel/Channel';

type SideBarChannelProps = {
  id: string
  keyValue: string
  name: string
  onClick: any
};

const SideBarChannel = ({
  id, keyValue, name, onClick,
}: SideBarChannelProps) => (
  <Channel key={keyValue} className="is-flex is-align-items-center" onClick={onClick}>
    <span><Chat className="icon" /></span>
    <div id={id}>
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
