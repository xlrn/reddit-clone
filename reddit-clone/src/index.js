import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Content from './content';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<Content api="https://www.reddit.com/.json"/>}></Route>
          <Route path="/hot" element={<Content api="https://www.reddit.com/hot/.json"/>}></Route>
          <Route path="/new" element={<Content api="https://www.reddit.com/new/.json"/>}></Route>
          <Route path="/top" element={<Content api="https://www.reddit.com/top/.json"/>}></Route>
        </Route> 
      </Routes>
    </BrowserRouter>
  </React.StrictMode>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
