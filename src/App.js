import React from 'react';
import './App.css';
import Home from './Component/Home/Home';
import Navbar from './Component/Navbar/Navbar';
import About from './Component/About/About';
import Contact from './Component/Contact/Contact';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
function App() {
  return (
  <>
<BrowserRouter>
<Routes>
<Route path='/' element={<Home/>} ></Route>
<Route path='/About' element={<About/>}></Route>
<Route path='/Contact' element={<Contact/>}></Route>
</Routes>

</BrowserRouter>






  </>
  )
}

export default App