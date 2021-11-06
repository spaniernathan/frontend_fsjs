import React, { useState } from 'react';
import { connect } from 'react-redux';
import { LOGIN } from '../../../redux/actionTypes';
import { Button } from '../../../components';

type LoginProps = {
  login: any
};

const Login = ({ login }: LoginProps) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  return (
    <div className="section">
      <div className="container">
        <div className="columns">
          <div className="column">
            <div className="field">
              <p className="control has-icons-left">
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e: any) => { setEmail(e.target.value); }}
                />
                <span className="icon is-small is-left">
                  <i className="fas fa-envelope" />
                </span>
              </p>
            </div>
            <div className="field">
              <p className="control has-icons-left">
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e: any) => { setPassword(e.target.value); }}
                />
                <span className="icon is-small is-left">
                  <i className="fas fa-lock" />
                </span>
              </p>
            </div>
            <div className="field">
              <p className="control">
                <Button
                  type="button"
                  onClick={() => { login({ email, password }); }}
                >
                  Login
                </Button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  login: (credentials) => dispatch({ type: LOGIN, payload: credentials }),
});

export default connect(null, mapDispatchToProps)(Login);
