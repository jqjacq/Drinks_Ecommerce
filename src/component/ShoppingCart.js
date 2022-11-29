import React from "react";
import InCart from "./InCart"

export default function Cart(props) {
    const { cartItems, onAdd, onRemove } = props
    return (
        <>
            <header><h1 className="centertext"> Shopping Cart</h1></header>
            <div className="row"> 
                <InCart onAdd={onAdd} onRemove={onRemove} cartItems={cartItems}></InCart>
                <aside className="col-1">
                    <h3 className="cart-section">Order Summary</h3>
                    <p> Subtotal: 
                        <span className="calculation">$0.00</span>
                    </p>
                    <p> Shipping & Handling: 
                        <span className="calculation">$0.00</span>
                    </p>
                    <p> Tax: 
                        <span className="calculation">$0.00</span>
                    </p>
                    <hr></hr>
                    <p className="bold"> Total 
                        <span className="calculation">$0.00</span>
                    </p>
                    <hr></hr>
                    <button> Checkout </button>
                </aside>

            </div>
        </>
        
    )
}