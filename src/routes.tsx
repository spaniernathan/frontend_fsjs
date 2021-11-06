import React from 'react';
import { Route, Routes } from 'react-router-dom';
import {
  Home, Login, Register, Lobby, NotFound, App,
} from 'containers';

const ProtectedRoutes = () => (
  <Routes>
    <Route path="/" element={<Lobby />} />
  </Routes>
);

const MyRoutes = () => (
  <App>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/looby" element={<ProtectedRoutes />} />
      <Route element={<NotFound />} />
    </Routes>
  </App>
);

export default MyRoutes;
