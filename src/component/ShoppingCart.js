import React from "react";

export default function Cart() {
    return (
        <div>
            <header><h1 className="cart-header"> Shopping Cart</h1></header>
            <div className="row"> 
                <main className="col-2">
                    <h3 className="cart-section">Your Bag</h3>
                </main>
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