import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Shop from './pages/shop';
import Blog from './pages/blog';

function App() {
return (
	<div className='appWrarp'>
    <Router>
	    <Navbar />
      <Routes>
        <Route path='/' exact element={<Home/>} />
        <Route path='/shop' element={<Shop/>} />
        <Route path='/blog' element={<Blog/>} />
      </Routes>
    </Router>
  </div>
);
}

export default App;
