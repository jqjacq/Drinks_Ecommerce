import React, { useState } from "react";
import teacoffeeData from "../data/coffeetea";
import ProductItems from "./ProductItems";
import "../style/index.css";

export default function Product({ onAdd }) {
  //Categorize all products, tea and coffee.
  const [filteredProducts, setFilteredProducts] = useState(teacoffeeData);

  function handleAllProductsButtonClick() {
    setFilteredProducts(teacoffeeData);
  }

  function handleTeaButtonClick() {
    const filteredTea = teacoffeeData.filter(
      (product) => product.category === "Tea"
    );
    setFilteredProducts(filteredTea);
  }

  function handleCoffeeButtonClick() {
    const filteredCoffee = teacoffeeData.filter(
      (product) => product.category === "Coffee"
    );
    setFilteredProducts(filteredCoffee);
  }

  return (
    <>
      <h1 className="centertext">
        <i class="fa-solid fa-shop halfopacity brown"></i>
        Our Products
      </h1>
      <div className="productbutton-container">
        <button
          className="product-button"
          onClick={handleAllProductsButtonClick}>
          <i className="fa-solid fa-bag-shopping red halfopacity"></i>
          All Products
        </button>
        <button className="product-button" onClick={handleTeaButtonClick}>
          <i className="fa-solid fa-leaf green halfopacity"></i>
          Tea
        </button>
        <button className="product-button" onClick={handleCoffeeButtonClick}>
          <i className="fa-solid fa-mug-hot blue halfopacity"></i>
          Coffee
        </button>
      </div>
      <div className="productimage-container contentmarginpadding">
        {filteredProducts.map((product) => (
          <ProductItems key={product.type} data={product} onAdd={onAdd} />
        ))}
      </div>
    </>
  );
}
