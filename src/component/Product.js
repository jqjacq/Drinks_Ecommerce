import React from "react"
import teacoffeeData from "../data/coffeetea"
import ProductItem from "./ProductItem"
import "../style/index.css"

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
            <>
                <h1 className="centertext"> 
                <i className="fa-solid fa-bag-shopping allhead"></i>
                    All Products </h1>
                <div className="productimage-container contentmarginpadding">
                    {TeaCoffee}
                </div>
            </>
    )
}