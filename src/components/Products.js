import React, { useEffect, useState } from "react";
import "../companents.css/products.css"
import Product from '../components/Product'

const Products = () => {
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])



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

  const allProducts = () => {
    setFilteredProducts(products)
  }

  const mensClothing = () => {
    console.log(products)
    let filterResult = products.filter(filterMen => filterMen.category === "men's clothing")
    console.log(products)
    setFilteredProducts(filterResult)
  }
  const womensClothing = () => {
    console.log(products)
    let filterResult = products.filter(filterWomen => filterWomen.category === "women's clothing")
    setFilteredProducts(filterResult)

  }
  const jewelery = () => {
    let filterResult = products.filter(filterWomen => filterWomen.category === "jewelery")
    setFilteredProducts(filterResult)
  }
  const electronics = () => {
    let filterResult = products.filter(filterWomen => filterWomen.category === "electronics")
    setFilteredProducts(filterResult)
    console.log(filteredProducts)
    console.log(products)

  }


  return (
    <>
      <div className="products">
        <div className="products-header">
          Latest Products
        </div>
        <div className="products-categories">
          <ul>
            <li onClick={allProducts}>All</li>
            <li onClick={mensClothing}>Men's Clothing</li>
            <li onClick={womensClothing}>Women's Clothing</li>
            <li onClick={jewelery}>Jewelery</li>
            <li onClick={electronics}>Electronics</li>
          </ul>
        </div>
      </div>

      <div className="all-products">{
        filteredProducts.map((product) => (
          <Product product={product}></Product>
        ))
      }
      </div>
    </>
  )

}

export default Products;