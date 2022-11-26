import React from "react"
import teacoffeeData from "../data/coffeetea"
import ProductItem from "./ProductItem"

export default function Product(props) {
    const { onAdd } = props
    const TeaCoffee = teacoffeeData.map(data => 
            <ProductItem 
                key = {data.type}
                data = {data}
                onAdd = {onAdd}
            />
        )
    return (
            <div className="product-container">
                <h1 className="product-header"> 
                <i className="fa-solid fa-bag-shopping allhead"></i>
                    All Products </h1>
                <div className="productimage-container">
                    {TeaCoffee}
                </div>
            </div>
    )
}