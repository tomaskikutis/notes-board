import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Store from './Store';
import './index.css';

ReactDOM.render(
  <Store App={App} />,
  document.getElementById('root')
);
