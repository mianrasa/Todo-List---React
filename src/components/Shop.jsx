import React, { useState } from 'react'
import ProductItem from './ProductItem'

const Shop = () => {
  let [product, setProduct] = useState({
    name:"iPhone7",
    price: 10000,
    description: "8GB RAM with 128GB",
  })
  return (
    <div>
      <h1>Welcome To My Shop</h1>
      <ProductItem product={product} />
    </div>
  )
}

export default Shop