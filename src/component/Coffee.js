import React from "react"
import teaData from "../data/teadata"
import TeaItem from "./ProductItem"

export default function Product() {
    const TeaCoffee = teaData.map(data => 
            <TeaItem 
                key = {data.type}
                data = {data}
            />
        )
        return (
            <TeaCoffee />
        )
    }