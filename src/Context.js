import { createContext, useContext, useEffect, useState } from 'react'

const MainContext = createContext();
const Context = ({ children }) => {
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])
  const [isOpenMyBag, setIsOpenMyBag] = useState(false);
  const [selectedProducts, setSelectedProducts] = useState([])
  const [loading, setLoading] = useState(true)


  const productsHeader = async () => {
    const url = `https://fakestoreapi.com/products`;
    const response = await fetch(url);
    const result = await response.json()
    console.log(result)
    setProducts(result)
    setFilteredProducts(result)
    setLoading(false)
  }
  useEffect(() => {
    productsHeader()
  }, [])

  const increaseProductCount = (product, count) => {
    const sameItem = selectedProducts.find((sameProduct) => sameProduct.id === product.id);
    if (sameItem) {
      const newProductsArray = selectedProducts.map((selectedProduct) => {
        if (selectedProduct.id === product.id) {
          return { ...selectedProduct, count: selectedProduct.count + count }
        }
        return selectedProduct;
      }
      )
      setSelectedProducts(newProductsArray)
    }

  }

  if (loading) {
    return (
      <div>
        Loading
      </div>
    )
  }
  const data = {
    products,
    setProducts,
    filteredProducts,
    setFilteredProducts,
    selectedProducts,
    setSelectedProducts,
    isOpenMyBag,
    setIsOpenMyBag,
    increaseProductCount
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