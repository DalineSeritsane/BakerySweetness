import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/AboutPage';
import Menu from './pages/MenuPage';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/about' element={<About />}/>
      <Route path='/menu' element={<Menu />}/>
    </Routes>
    </BrowserRouter>
  );  
}

export default App;