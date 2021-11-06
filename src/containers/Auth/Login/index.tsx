import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from 'redux/actions';

// If already logged in => redirect to home page

const Login = ({ loginAction, auth }: any) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  useEffect(() => {
    if (auth.accessToken && auth.refreshToken) navigate('/', { replace: true });
  }, [auth]);

  return (
    <div className="section">
      <div className="container">
        <div className="field">
          <p className="control has-icons-left">
            <input
              className="input"
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
              className="input"
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
  );
};

const mapDispatchToProps = (dispatch: any) => ({
  loginAction: (payload: any) => dispatch(login(payload)),
});

const mapStateToProps = (store: any) => {
  const { auth } = store;
  return ({
    auth,
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
