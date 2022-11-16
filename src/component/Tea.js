import React from "react"
import teaData from "../data/teadata"
import TeaItem from "./TeaItem"

export default function Tea() {
    const Tea = teaData.map(data => 
            <TeaItem 
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