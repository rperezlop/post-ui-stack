import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import {Provider} from 'react-redux';
import store from './components/store/index';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
  <React.StrictMode>
   <Provider store={store}>
    <Auth0Provider
    domain="dev-pbb6d4el.us.auth0.com"
    clientId="PgEXDqach5hTlZA2uybuYCcvwGduduoA"
    redirectUri={window.location.origin}
  >
     
    <App />
  
    </Auth0Provider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
