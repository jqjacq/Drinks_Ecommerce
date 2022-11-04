import React from "react"

export default function Product(props) {    
    return (
        <figure>
            <img src = {props.img} className="coffeeteaImage"
            alt={`${props.type}`}/>
            <p className = "coffeeteaType"> {props.type} </p>
            <p>{props.pricePerLb}
            <button>BUY</button> 
            </p>
        </figure>
    )
    }
