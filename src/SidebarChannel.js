import React from 'react';
import Chat from '@mui/icons-material/Chat'
import './style/SideBarChannel.css'

const SideBarChannel = ({id, name}) => {
    return (
        <div className="channel">
            <span><Chat className="icon"></Chat></span>Youtube
        </div>);
}
 
export default SideBarChannel;