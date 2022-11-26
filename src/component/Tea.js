import React from "react"
import teaData from "../data/teadata"
import TeaItem from "./TeaItem"

export default function Tea(props) {
    const { onAdd } = props
    const Tea = teaData.map(data => 
            <TeaItem 
                key = {data.type}
                data = {data}
                onAdd = {onAdd}
            />
        )
        return (
            <div className="product-container">
                <h1 className="product-header"> 
                <i className="fa-solid fa-leaf teahead"></i>
                    Teas </h1>
                <div className="productimage-container">
                    {Tea}
                </div>
            </div>
    )
    }