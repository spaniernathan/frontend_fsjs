/* eslint-disable jsx-a11y/aria-role */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/destructuring-assignment */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './style/customPopup.css';

const CustomPopup = (props): JSX.Element => {
  const [show, setShow] = useState(false);
  const enter = (event) => {
    if (event.key === 'Enter') {
      console.log(event.target.value);
    }
  };

  const closeHandler = (e) => {
    setShow(false);
    console.log(e);
    props.onClose(false);
  };

  useEffect(() => {
    setShow(props.show);
  }, [props.show]);

  return (
    <div
      style={{
        visibility: show ? 'visible' : 'hidden',
        opacity: show ? '1' : '0',
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
      }}
      className="overlay"
    >
      <div className="popup">
        <div className="popup_title">
          <h2 className="channel_title">
            Create channel
            {props.title}
          </h2>
          <span role="" className="close" onClick={closeHandler} onKeyDown={(e) => enter(e)}>
            &times;
          </span>
        </div>
        {/* <form className="f"> */}
        <input placeholder="Channel name" onKeyDown={(e) => enter(e)} />
        {/* </form> */}
        <button type="button" className="add">Add Channel</button>
      </div>
    </div>
  );
};

CustomPopup.propTypes = {
  title: PropTypes.string.isRequired,
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default CustomPopup;
