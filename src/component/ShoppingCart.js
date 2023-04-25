import React from "react";
import InCart from "./InCart";
import "../style/index.css";

export default function Cart(props) {
  const { cartItems, onAdd, onRemove } = props;
  let subTotal = 0.0;
  for (let i = 0; i < cartItems.length; i++) {
    subTotal += parseFloat(cartItems[i].cost) * cartItems[i].quantity;
  }
  let discountPrice = 0.0;
  let shippingPrice = subTotal > 99 ? 0.0 : 8.99;
  let totalPrice = parseFloat(subTotal + discountPrice + shippingPrice);

  return (
    <>
      <header>
        <h1 className="centertext">Shopping Cart</h1>
      </header>
      <div className="row">
        <InCart
          onAdd={onAdd}
          onRemove={onRemove}
          cartItems={cartItems}></InCart>

        <aside className="col-1">
          <h3 className="cart-section">Order Summary</h3>
          <p>
            Subtotal:
            <span className="calculation">${subTotal.toFixed(2)}</span>
          </p>
          <p>
            Discount:
            <span className="calculation">${discountPrice}</span>
          </p>
          <p>
            Shipping:
            <span className="calculation">${shippingPrice}</span>
          </p>
          <hr></hr>
          <p className="bold">
            Total
            <span className="calculation">${totalPrice.toFixed(2)}</span>
          </p>
          <hr></hr>
          <button className="checkout-button"> Checkout </button>
        </aside>
      </div>
    </>
  );
}
