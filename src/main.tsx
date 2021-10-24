import React from 'react';
import ReactDOM from 'react-dom';
import './styles/global.css';
import { App } from './App';
import { Authprovider } from './contexts/auth';

ReactDOM.render(
  <React.StrictMode>
    <Authprovider>
      <App />
    </Authprovider>
  </React.StrictMode>,
  document.getElementById('root')
)
