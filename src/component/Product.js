import React from "react"
import teacoffeeData from "../data/coffeetea"

export default function Product() {
    const TeaCoffee = teacoffeeData.map(data => 
        <div>
            <img src = {data.img} className="coffeeteaImage" alt = {data.type}/>
            <p className = "coffeeteaType"> {data.type} </p>
            <p>{data.pricePerLb} 
            <button className="buy">BUY</button> </p>
         </div>
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