import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import App from './App';
import { AuthContextProvider } from "./context/authContext";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(


  <AuthContextProvider>
    <App />
  </AuthContextProvider>


);

