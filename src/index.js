import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// For Redux only
import { Provider } from "react-redux"
// import { store } from "./components/Redux"
import { store } from "./components/Redux2"
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);


