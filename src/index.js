import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Forum from './components/Edit'
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Team} from './components/Teams';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import YouTube from './components/YouTube';

ReactDOM.render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<App />} />
    <Route path="/header" element={<Team />} />
    <Route path="/youtube" element={<YouTube />} />
    <Route path = "edit" element ={<Forum />} />
  </Routes>
</BrowserRouter>, document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
