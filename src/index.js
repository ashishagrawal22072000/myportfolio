import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Reducer from './redux/reducer';
const root = ReactDOM.createRoot(document.getElementById('root'));
const store = createStore(Reducer);
root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);
