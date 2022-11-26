import React from "react";
import InCart from "./InCart"

export default function Cart(props) {
    const { cartItems, onAdd } = props
    return (
        <div>
            <header><h1 className="cart-header"> Shopping Cart</h1></header>
            <div className="row"> 
                <InCart onAdd={onAdd} cartItems={cartItems}></InCart>
                <aside className="col-1">
                    <h3 className="cart-section">Order Summary</h3>
                    <p> Subtotal: </p>
                    <p> Shipping & Handling: </p>
                    <p> Tax: </p>
                    <hr></hr>
                    <p className="total"> Total </p>
                    <hr></hr>
                    <button> Checkout </button>
                </aside>

            </div>
        </div>
        
    )
}