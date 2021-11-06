import React, { useState } from 'react';
import { connect } from 'react-redux';
import { login } from 'redux/actions';

const Login = ({ loginAction }: any) => {
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
                <button
                  className="button is-primary"
                  type="button"
                  onClick={() => {
                    loginAction({ email, password });
                  }}
                >
                  Login
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch: any) => ({
  loginAction: (payload: any) => dispatch(login(payload)),
});

export default connect(null, mapDispatchToProps)(Login);
