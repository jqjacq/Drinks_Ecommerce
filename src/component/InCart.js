import React from "react"

export default function InCart(props) {
    const { cartItems, onAdd } = props 
    console.log(cartItems)
    const EmptyCart = () => {
        if (cartItems === undefined) {
            return (
                <div> Cart is empty. </div> 
            )
        }
    }
    const ShowCart = () => {
        if (cartItems) {
            return (cartItems.map((item) => (
                <div key={cartItems.id}>
                    <div> {cartItems.name}</div>
                    <div>
                        <button onClick={()=>onAdd(item)} className="add">+</button>
                        {/* <button onClick={()=>onRemove(item)} className="remove">-</button> */}
                    </div>
                </div>
                ))
            )
        }
    }
    return (
        <main className="col-2">
            <h3 className="cart-section">Your Bag</h3>
            <div>
                <EmptyCart />
                <ShowCart />
            </div>
        </main>
    )
}