import React from 'react';
import { Link } from 'react-router-dom';
import { Div, Title, Button } from '../../components';

const NotFound = () => (
  <div>
    <Div theme={{ bgColor: 'fff' }} className="rec has-text-centered is-shadowless">
      <Title theme={{ fontSize: '100px' }}> 404 Page not found</Title>
    </Div>
    <Div theme={{ bgColor: 'fff' }} className="rec is-flex is-justify-content-center is-align-items-center is-shadowless">
      <Link to="register"><Button>Register</Button></Link>
      <Link to="login"><Button>Login</Button></Link>
    </Div>
  </div>
);

export default NotFound;
