import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Categories from './components/Categories';
import Contact from './components/Contact';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./companents.css/app.css"
import { Context } from "./Context"
import MyBag from './components/MyBag';
import AddingNewProduct from './components/AddingNewProduct';
import CompleteOrder from './components/CompleteOrder';



function App() {


  return (
    <Context>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path='/' exact element={<Home></Home>}></Route>
          <Route path='/categories' element={<Categories></Categories>}></Route>
          <Route path='/contact' element={<Contact></Contact>}></Route>
          <Route path='/addingNewProduct' element={<AddingNewProduct></AddingNewProduct>}></Route>
          <Route path='/mybag' element={<MyBag></MyBag>}></Route>
          <Route path='/completeOrder' element={<CompleteOrder ></CompleteOrder>}></Route>
        </Routes>
      </BrowserRouter>
    </Context>
  )
}

export default App;
