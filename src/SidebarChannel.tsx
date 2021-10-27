import React from 'react';
import Chat from '@mui/icons-material/Chat';
import './style/SideBarChannel.css';
import PropTypes from 'prop-types';

const SideBarChannel = ({ id, name }) => (
  <div className="channel">
    <span><Chat className="icon" /></span>
    <div id={id}>
      <p>
        {id}
      </p>
      <p>
        {name}
      </p>

    </div>
  </div>
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
