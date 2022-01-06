import React, { useEffect, useState } from "react";
import "../companents.css/products.css"

const Products = () => {
  const [products, setProducts] = useState([])

  const productsHeader = async () => {
    const url = `https://fakestoreapi.com/products`;
    const response = await fetch(url);
    const result = await response.json()
    console.log(result)
    setProducts(result)
  }

  useEffect(() => {
    productsHeader()
  }, [])
  return (
    <>
      <div className="products">
        <div className="products-header">
          Latest Products
        </div>
        <div className="products-categories">
          <ul>
            <li>All</li>
            <li>Men's Clothing</li>
            <li>Women's Clothing</li>
            <li>Jewelery</li>
            <li>Electronics</li>
          </ul>
        </div>
      </div>

      <div className="all-products">{
        products.map((product) => (
          <div className="image-div">
            <img src={product.image} alt="product-img"></img>
          </div>
        ))
      }
      </div>
    </>
  )

}

export default Products;