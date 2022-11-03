import React from "react"

export default function Product(props) {
    return (
        <img src={props.img} className="coffeeteaImage"
        alt={`${props.type}`}/>
    )
}