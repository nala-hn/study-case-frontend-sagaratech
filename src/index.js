import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {  BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import SignIn from './components/SignIn';
import Layout from './components/Layout';
import Dashboard_admin from './components/Dashboard_admin';
import Student from './components/Student';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="admin" element={<Layout />}>
          <Route index element={<Dashboard_admin />} />
          <Route path="dashboard_admin" element={<Dashboard_admin />} />
          <Route path="student" element={<Student />} /> 
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

