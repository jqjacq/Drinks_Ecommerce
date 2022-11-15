import React from "react"
import coffeeData from "../data/coffeedata"
import CoffeeItem from "./CoffeeItem"

export default function Tea() {
    const Coffee = coffeeData.map(data => 
            <CoffeeItem 
                key = {data.type}
                data = {data}
            />
        )
        return (
            <div className="product-container">
                <h1 className="product-header"> 
                <i className="fa-solid fa-bag-shopping"></i>
                    Coffee </h1>
                <div className="productimage-container">
                    {Coffee}
                </div>
            </div>
    )
    }