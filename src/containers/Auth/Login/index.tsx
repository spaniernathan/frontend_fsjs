import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from 'redux/actions';
import {
  Button,
  Input,
  Title,
  Links,
  Div,
} from '../../../components';

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
      <div className="box border-color: transparent transparent $grey $grey !important is-full has-text-centered">
        <Title>M&apos;EN FOUS</Title>
      </div>
      <Div className="container box background-color #e8e8e8">
        <div className="field has-text-centered">
          <Title> LOGIN</Title>
        </div>
        <div className="field">
          <p className="control has-icons-left">
            <h3>Email</h3>
            <Input
              className="input"
              type="email"
              // placeholder="Email"
              value={email}
              onChange={(e: any) => { setEmail(e.target.value); }}
            />
            {/* <span className="icon is-small is-left">
              <i className="fas fa-envelope" />
            </span> */}
          </p>
        </div>
        <div className="field">
          <p className="control has-icons-left">
            <h3>Password</h3>
            <Input
              className="input"
              type="password"
              // placeholder="Password"
              value={password}
              onChange={(e: any) => { setPassword(e.target.value); }}
            />
            {/* <span className="icon is-small is-left">
              <i className="fas fa-lock" />
            </span> */}
          </p>
        </div>
        <div className="field">
          <p className="control">
            <Button
              className="button is-centered"
              type="button"
              onClick={() => {
                loginAction({ email, password });
              }}
            >
              Login
            </Button>
          </p>
        </div>
      </Div>
      <Links to="/register">Register</Links>
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
