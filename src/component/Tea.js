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
            <>
                <h1 className="centertext"> 
                <i className="fa-solid fa-leaf teahead"></i>
                    Teas </h1>
                <div className="productimage-container contentmarginpadding">
                    {Tea}
                </div>
            </>
    )
    }