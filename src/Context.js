import { createContext, useContext, useEffect, useState } from 'react'

const MainContext = createContext();
const Context = ({ children }) => {
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectedProducts, setSelectedProducts] = useState([])

  console.log(selectedProducts)


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
    modalIsOpen,
    setIsOpen,
    selectedProducts,
    setSelectedProducts
  }
  return (
    <MainContext.Provider value={data}>
      {children}
    </MainContext.Provider>
  )
}

export {
  MainContext,
  useContext,
  Context
}