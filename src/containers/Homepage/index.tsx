import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  Title,
  Div,
  Paragraph,
  Button,
} from '../../components';

const Home = () => (
  <div className="section is-flex is-justify-content-center is-align-items-center is-flex-direction-column" style={{ width: '100vw' }}>
    <Div theme={{ bgColor: 'fff' }} className="box border-color: transparent transparent $grey $grey !important is-full has-text-centered">
      <Title theme={{ fontSize: '70px' }}>M&apos;EN FOUS</Title>
    </Div>
    <Div theme={{ bgColor: '#e8e8e8' }} className="box border-color: transparent transparent $grey $grey !important is-full has-text-centered">
      <Paragraph>
        Bienvenu sur M&apos;EN FOUS
        <br />
        Une application de salle de discussion en ligne !
      </Paragraph>
    </Div>
    <Div theme={{ bgColor: 'fff' }} className="rec is-flex is-justify-content-center is-align-items-center">
      <Link to="register"><Button theme={{ fontSize: '1.5em' }}>Register</Button></Link>
      <Link to="login"><Button theme={{ fontSize: '1.5em' }}>Login</Button></Link>
    </Div>
  </div>
);

export default connect()(Home);
