import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Main from './pages/Main';
import List from './pages/List';
import About from './pages/About';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Notfound from './pages/Notfound';
import Service from './pages/Service';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
  <BrowserRouter>
<Routes>
  <Route path="/" element={<Main/>}></Route>
  <Route path="/list" element={<List/>} ></Route>
  <Route path="/about" element={<About/>} ></Route>
  <Route path="*" element={<Notfound/>}></Route>
  <Route path="/service" element={<Service/>}></Route>
</Routes>
</BrowserRouter>
 
);

