import React, { useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import {
  Home, Login, Register, Lobby, NotFound, App,
} from 'containers';
import { useStore } from 'react-redux';

const ProtectedRoutes = () => {
  const navigate = useNavigate();
  const { getState } = useStore();
  const { auth } = getState();

  // useEffect(() => {
  //   if (!auth.accessToken || !auth.refreshToken) navigate('/login', { replace: true });
  // }, [auth]);

  return (
    <Routes>
      <Route path="/" element={<Lobby />} />
    </Routes>
  );
};

const MyRoutes = () => (
  <App>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/lobby" element={<ProtectedRoutes />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </App>
);

export default MyRoutes;
