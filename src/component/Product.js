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
    <div>
        <h1 className="product-header"> Our Products</h1>
        <br></br>
        <div className="productimage-container">
            {TeaCoffee}
        </div>
    </div>
    )
}