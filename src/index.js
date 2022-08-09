import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './home';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<App/>}>
      <Route path="home" element={<Home />} /> 
      </Route>
    </Routes>
  </Router>
);

