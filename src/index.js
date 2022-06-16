import React from 'react';

import ReactDOM from 'react-dom/client';

import './index.css';

import App from './App';

// Provider being imported here from react-redux which is responsible for binding the two liberies together 
import { Provider } from 'react-redux';

// importation of the configstore from the store folder 
import { configStore } from './store/Store';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(

  <React.StrictMode>

    <Provider store={configStore()}>

      <App />
      
    </Provider>

  </React.StrictMode>

);