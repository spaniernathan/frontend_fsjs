/* eslint-disable jsx-a11y/aria-role */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/destructuring-assignment */
import React, { useState } from 'react';
import '../style/AddChannelPopup.css';
import ShowPopup from '../../components/Lobby/Popup/ShowPopup';
import PopupContent from '../../components/Lobby/Popup/PopupContent';
import PopupTitle from '../../components/Lobby/Popup/PopupTitle';
import Close from '../../components/Lobby/Popup/Close';
import PopupMessage from '../../components/Lobby/Popup/PopupMessage';
import ButtonAddChannel from '../../components/Lobby/Popup/ButtonAddChannel';

const AddChannelPopup = ({
  action, addChannel, title, show, setShow,
}: any) => {
  const [value, setValue] = useState('');

  const enter = (event: any) => {
    if (event.key === 'Enter') {
      action(value);
    }
  };

  const closeHandler = () => {
    setShow(false);
  };

  const onClickAddChannel = () => {
    if (addChannel) {
      action({ roomName: value });
    } else {
      action({ roomId: value });
    }
    setShow(false);
  };

  if (addChannel === true) {
    return (
      <div
        style={{
          visibility: show ? 'visible' : 'hidden',
          opacity: show ? '1' : '0',
        }}
        className="overlay is-flex is-align-items-center is-justify-content-center"
      >
        <ShowPopup className="is-align-items-center is-flex-direction-column is-flex is-justify-content-center">
          <PopupContent className="is-flex is-justify-content-space-between">
            <PopupTitle className="is-flex is-justify-content-space">
              Create channel
              {title}
            </PopupTitle>
            <Close role="" onClick={closeHandler} onKeyDown={closeHandler}>
              &times;
            </Close>
          </PopupContent>
          <PopupMessage placeholder="Channel name" onKeyDown={(e) => enter(e)} value={value} onChange={(e: any) => setValue(e.target.value)} />
          <ButtonAddChannel type="button" className="ButtonAddChannel" onClick={onClickAddChannel}>Add Channel</ButtonAddChannel>
        </ShowPopup>
      </div>
    );
  }
  return (
    <div
      style={{
        visibility: show ? 'visible' : 'hidden',
        opacity: show ? '1' : '0',
      }}
      className="overlay is-flex is-align-items-center is-justify-content-center"
    >
      <ShowPopup className="is-align-items-center is-flex-direction-column is-flex is-justify-content-center">
        <PopupContent className="is-flex is-justify-content-space-between">
          <PopupTitle className="is-flex is-justify-content-space">
            Join team
            {title}
          </PopupTitle>
          <Close role="" onClick={closeHandler} onKeyDown={() => closeHandler()}>
            &times;
          </Close>
        </PopupContent>
        <PopupMessage placeholder="Channel name" onKeyDown={(e) => enter(e)} value={value} onChange={(e: any) => setValue(e.target.value)} />
        <ButtonAddChannel type="button" className="ButtonAddChannel" onClick={onClickAddChannel}>Add Member</ButtonAddChannel>
      </ShowPopup>
    </div>
  );
};

export default AddChannelPopup;
