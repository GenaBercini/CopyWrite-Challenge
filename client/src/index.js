import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'
import store from "../src/redux/store/store"
import axios from 'axios';
import dotenv from "dotenv";
import 'dotenv/config'

dotenv.config();
axios.defaults.baseURL = process.env.REACT_APP_API || 'http://localhost:3001';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
  <App />
</Provider>
);