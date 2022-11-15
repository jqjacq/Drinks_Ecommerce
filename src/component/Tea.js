import React from "react"
import teaData from "../data/teadata"
import ProductItem from "./ProductItem"

export default function Tea() {
    const Tea = teaData.map(data => 
            <ProductItem 
                key = {data.type}
                data = {data}
            />
        )
        return (
            <div className="product-container">
                <h1 className="product-header"> 
                <i className="fa-solid fa-bag-shopping"></i>
                    Teas </h1>
                <div className="productimage-container">
                    {Tea}
                </div>
            </div>
    )
    }