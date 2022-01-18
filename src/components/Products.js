
import "../companents.css/products.css"
import Product from '../components/Product'
import { MainContext, useContext } from "../Context";

const Products = () => {

  const { products, filteredProducts, setFilteredProducts } = useContext(MainContext)
  const allProducts = () => {
    setFilteredProducts(products)
  }

  const mensClothing = () => {
    console.log(products)
    let filterResult = products.filter(filterMen => filterMen.category === "men's clothing")
    setFilteredProducts(filterResult)
  }
  const womensClothing = () => {
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
          <Product key={product.id} product={product}></Product>
        ))
      }
      </div>
    </>
  )

}

export default Products;