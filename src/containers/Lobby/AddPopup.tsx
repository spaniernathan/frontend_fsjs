/* eslint-disable jsx-a11y/aria-role */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/destructuring-assignment */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import '../style/AddChannelPopup.css';
import ShowPopup from '../../components/Lobby/Popup/ShowPopup';
import PopupContent from '../../components/Lobby/Popup/PopupContent';
import PopupTitle from '../../components/Lobby/Popup/PopupTitle';
import Close from '../../components/Lobby/Popup/Close';
import PopupMessage from '../../components/Lobby/Popup/PopupMessage';
import ButtonAddChannel from '../../components/Lobby/Popup/ButtonAddChannel';

const AddChannelPopup = (props: any): JSX.Element => {
  console.log('addin channel', props.addChannel);
  const [show, setShow] = useState(false);
  const enter = (event: any) => {
    if (event.key === 'Enter') {
      console.log(event.target.value);
    }
  };

  const closeHandler = (e: any) => {
    setShow(false);
    console.log(e);
    props.onClose(false);
  };

  useEffect(() => {
    setShow(props.show);
  }, [props.show]);

  if (props.addChannel === true) {
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
              {props.title}
            </PopupTitle>
            <Close role="" onClick={closeHandler} onKeyDown={(e) => enter(e)}>
              &times;
            </Close>
          </PopupContent>
          {/* <form className="f"> */}
          <PopupMessage placeholder="Channel name" onKeyDown={(e) => enter(e)} />
          {/* </form> */}
          <ButtonAddChannel type="button" className="ButtonAddChannel">Add Channel</ButtonAddChannel>
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
            {props.title}
          </PopupTitle>
          <Close role="" onClick={closeHandler} onKeyDown={(e) => enter(e)}>
            &times;
          </Close>
        </PopupContent>
        {/* <form className="f"> */}
        <PopupMessage placeholder="Channel name" onKeyDown={(e) => enter(e)} />
        {/* </form> */}
        <ButtonAddChannel type="button" className="ButtonAddChannel">Add Channel</ButtonAddChannel>
      </ShowPopup>
    </div>
  );
};

AddChannelPopup.propTypes = {
  title: PropTypes.string.isRequired,
  show: PropTypes.bool.isRequired,
  addChannel: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default AddChannelPopup;
