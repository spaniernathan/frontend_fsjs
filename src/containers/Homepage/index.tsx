import React from 'react';
import { connect } from 'react-redux';

const Home = () => (
  <div>
    <p>Bienvenu sur la homepage !</p>
  </div>
);

export default connect()(Home);
