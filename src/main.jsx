import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux'; // Changed from legacy_createStore to createStore
import { Provider } from 'react-redux';
import reducer from './Reducer.jsx';
import LogIn from './LogIn.jsx';




const appStore = createStore(reducer); // Changed from legacy_createStore to createStore

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={appStore}>
      
        <BrowserRouter>
          <LogIn />
        </BrowserRouter>

    </Provider>
  </React.StrictMode>
);
