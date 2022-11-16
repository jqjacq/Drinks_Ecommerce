import React from "react"
import teacoffeeData from "../data/coffeetea"
import ProductItem from "./ProductItem"

export default function Product() {
    const TeaCoffee = teacoffeeData.map(data => 
            <ProductItem 
                key = {data.type}
                data = {data}
            />
        )
    return (
            <div className="product-container">
                <h1 className="product-header"> 
                <i className="fa-solid fa-bag-shopping"></i>
                    All Products </h1>
                <div className="productimage-container">
                    {TeaCoffee}
                </div>
            </div>
    )
}