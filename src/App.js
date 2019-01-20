import React from 'react';
import { Router } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Routes from './routes';

function App({ history }) {
  return (
    <Router history={history}>
      <HelmetProvider>
        <Routes />
      </HelmetProvider>
    </Router>
  );
}

export default App;
