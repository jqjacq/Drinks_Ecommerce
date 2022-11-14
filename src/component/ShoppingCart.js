import React from "react";

const Cart = ({ cartItems }) => {
    return (
        <div className="cart-items">
            <div className="cart-header">
                Cart Items
            </div>

            {cartItems.length === 0 &&<div> No items are added. 
            </div>}

        </div>
    )
}

export default Cart