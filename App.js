import './App.css';
import React from 'react';
import Home from './Component/Home'
import Service from './Component/Service'
import About from './Component/About'
import Layout from './Component/Layout'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
function App() {
  return (
    <Router>
      <Layout/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/service' element={<Service/>}/>
      </Routes>
    </Router>
  );
}
export default App;
