import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.module.scss';
import App from './components/App/App';
import { Providers } from './redux/provider';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Providers>
      <App />
    </Providers>
  </React.StrictMode>
);