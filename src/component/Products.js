import React, { useState } from "react"
import teacoffeeData from "../data/coffeetea"
import ProductItems from "./ProductItems"
import "../style/index.css"

export default function Product({ onAdd }) {
const [filteredProducts, setFilteredProducts] = useState(teacoffeeData);

function handleAllProductsButtonClick() {
  setFilteredProducts(teacoffeeData);
}

function handleTeaButtonClick() {
  const filtered = teacoffeeData.filter(product => product.category === 'Tea');
  setFilteredProducts(filtered);
}

function handleCoffeeButtonClick() {
  const filtered = teacoffeeData.filter(product => product.category === 'Coffee');
  setFilteredProducts(filtered);
}

return (
  <>
    <h1 className="centertext">
      Our Products
    </h1>
    <div className="productbutton-container">
            <button className="product-button"onClick={handleAllProductsButtonClick}>
              <i className="fa-solid fa-bag-shopping allhead"></i>
                All Products
              </button>
            <button className="product-button"onClick={handleTeaButtonClick}>
              <i className="fa-solid fa-leaf teahead"></i>
                Tea
              </button>
            <button className="product-button"onClick={handleCoffeeButtonClick}>
              <i className="fa-solid fa-mug-hot coffeehead"></i>
                Coffee 
              </button>
    </div>
    <div className="productimage-container contentmarginpadding">
      {filteredProducts.map(product => (
        <ProductItems
          key={product.type}
          data={product}
          onAdd={onAdd}
        />
      ))}
    </div>
  </>
);
}