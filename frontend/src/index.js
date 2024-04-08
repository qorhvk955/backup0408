import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App'; // App 컴포넌트 임포트

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);
