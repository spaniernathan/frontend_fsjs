import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { register } from 'redux/actions';
import {
  Button,
  Input,
  Title,
  Links,
  Div,
} from '../../../components';

const Register = ({ registerAction, auth }: any) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [displayName, setDisplayName] = useState<string>('');

  useEffect(() => {
    if (auth.accessToken && auth.refreshToken) navigate('/', { replace: true });
  }, [auth]);

  return (
    <div className="section is-flex is-justify-content-center is-align-items-center is-flex-direction-column" style={{ width: '100vw' }}>
      <Div theme={{ bgColor: 'fff' }} className="box border-color: transparent transparent $grey $grey !important is-full has-text-centered">
        <Title theme={{ fontSize: '40px' }}>M&apos;EN FOUS</Title>
      </Div>
      <Div className="container box background-color #e8e8e8">
        <div className="field has-text-centered">
          <Title theme={{ fontSize: '30px' }}>REGISTER</Title>
        </div>
        <div className="field">
          <p className="control has-icons-left">
            <h3>Email</h3>
            <Input
              className="input"
              type="email"
              value={email}
              onChange={(e: any) => { setEmail(e.target.value); }}
            />
          </p>
        </div>
        <div className="field">
          <p className="control has-icons-left">
            <h3>Password</h3>
            <Input
              className="input"
              type="password"
              value={password}
              onChange={(e: any) => { setPassword(e.target.value); }}
            />
          </p>
        </div>
        <div className="field">
          <p className="control has-icons-left">
            <h3>Username</h3>
            <Input
              className="input"
              type="text"
              value={displayName}
              onChange={(e: any) => { setDisplayName(e.target.value); }}
            />
          </p>
        </div>
        <div className="field">
          <p className="control">
            <Button
              className="button is-centered"
              type="button"
              onClick={() => {
                registerAction({ email, password, displayName });
                navigate('/login');
              }}
            >
              Register
            </Button>
          </p>
        </div>
      </Div>
      <Links to="/Login">Login</Links>
    </div>
  );
};

const mapDispatchToProps = (dispatch: any) => ({
  registerAction: (payload: any) => dispatch(register(payload)),
});

const mapStateToProps = (store: any) => {
  const { auth } = store;
  return ({
    auth,
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
