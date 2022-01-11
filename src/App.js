import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Categories from './components/Categories';
import Contact from './components/Contact';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./companents.css/app.css"
import { MainContext } from './Context'
import { useEffect, useState } from 'react';


function App() {
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])
  const [count, setCount] = useState(0);
  const [disable, setDisable] = useState(true)


  const productsHeader = async () => {
    const url = `https://fakestoreapi.com/products`;
    const response = await fetch(url);
    const result = await response.json()
    console.log(result)
    setProducts(result)
    setFilteredProducts(result)
  }
  useEffect(() => {
    productsHeader()
  }, [])

  const data = {
    products,
    setProducts,
    filteredProducts,
    setFilteredProducts,
    count,
    setCount,
    disable,
    setDisable
  }

  return (
    <MainContext.Provider value={data}>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path='/' exact element={<Home></Home>}></Route>
          <Route path='/categories' element={<Categories></Categories>}></Route>
          <Route path='/contact' element={<Contact></Contact>}></Route>
        </Routes>
      </BrowserRouter>
    </MainContext.Provider>
  )
}

export default App;
