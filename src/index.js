import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

// Import components
import App from './App';

// Import styles
import './styles/index.scss';
import './styles/Home.scss';
import './styles/Cities.scss';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root'),
);
