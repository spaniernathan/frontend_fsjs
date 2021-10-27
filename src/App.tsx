import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from 'react-router-dom';
import MenFou from './Home';

function App() {
  return (
    <Router>
      <div>
        {/* <nav>
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
          </ul>
        </nav> */}
        {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/home" component={MenFou} />
          <Route path="/login">
            <div><p>login</p></div>
          </Route>
          <Route path="/register">
            <div><p>register</p></div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
