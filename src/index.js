import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Main from './App';
import store from "./redux-store";
import { Provider } from "react-redux";

ReactDOM.render(
  <Provider store={store}>
    <Main />
  </Provider>,
  document.getElementById('root')
);

