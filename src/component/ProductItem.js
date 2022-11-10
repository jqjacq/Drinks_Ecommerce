import React from "react";
import PopUp from "./PopupDetail"
import './Popup.css'

export default function ProductItem(props) {
    const [buttonPopup, setButtonPopup] = React.useState(false)
    return (
        <div>
        <section>
            <img src = {props.data.img} className="coffeeteaImage" 
                alt = {props.data.type}
                onClick={()=> setButtonPopup(true)}
            />
            <p className = "coffeeteaType"> {props.data.type} </p>
            <p>{props.data.pricePerLb} 
            <button className="buy"
                onClick={()=> setButtonPopup(true)}> 
                BUY
            </button> 
            </p>
        </section>
        <PopUp trigger = {buttonPopup} 
            setTrigger= {setButtonPopup}>
            <div>
                <h2> {props.data.type} </h2>
                <img src = {props.data.img} className="coffeeteaImage" alt = {props.data.type}/>
                <h3> Taste Description: {props.data.description} </h3>
                <h3> {props.data.pricePerLb} </h3>
                <button className="buy"> BUY </button> 
            </div>
        </PopUp>
     </div>
    )
}