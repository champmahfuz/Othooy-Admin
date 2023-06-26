import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { ValueProvider } from './components/context/ValueProvider';
import { CssBaseline } from '@mui/material';
import { AdminAuthProvider } from './components/context/AdminAuthProvider';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <CssBaseline />
      <ValueProvider>
        <AdminAuthProvider>
          <App />
        </AdminAuthProvider>
      </ValueProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
