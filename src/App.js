import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Categories from './components/Categories';
import Contact from './components/Contact';
import { BrowserRouter, Routes, Route } from "react-router-dom";



function App() {

  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <Routes>

        <Route path='/' exact element={<Home></Home>}></Route>
        <Route path='/categories' element={<Categories></Categories>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App;
