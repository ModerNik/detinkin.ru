import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Bar from './components/bar'
import reportWebVitals from './reportWebVitals';
import { Provider } from "react-redux"
import { configureStore, Action } from "@reduxjs/toolkit"
//import store from "./store";

/*
gray - #272727
cyan - #116466
dark beige - #D9B08C
beige - #FFCB9A
white - #D1E8E2
*/

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <><Bar />
    <App /></>
);

reportWebVitals();