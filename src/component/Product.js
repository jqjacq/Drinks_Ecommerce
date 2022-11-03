import React from "react"

export default function Product(props) {
    return (
        <div>
        <p>{props.type}</p>
        <img src={props.img} className="coffeeteaImage"
        alt={`${props.type}`}/>
        <p>{props.pricePerLb}
            <button>BUY</button> 
        </p>
        </div>
    )
}