import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard_admin from './components/Dashboard_admin';
import Student from './components/Student';
import SignIn from './components/SignIn';
import LandingPage from './components/LandingPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="signin" element={<SignIn />} />
        <Route path="admin" element={<Layout />}>
          <Route index element={<Dashboard_admin />} />
          <Route path="dashboard_admin" element={<Dashboard_admin />} />
          <Route path="student" element={<Student />} /> 
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
