import React from "react"

export default function InCart(props) {
    const { cartItems, onAdd, onRemove } = props 

    const EmptyCart = () => {
        if (cartItems.length === 0) {
            return (
                <div> Cart is empty. </div> 
            )
        }
    }
    const ShowCart = () => {
        if (cartItems) {
            return (cartItems.map((item) => (
                <div key={item.id}>
                    <div className="row"> 
                        <span>
                            <span>{item.id}</span>
                            <span className="calculation">
                                <button onClick={()=>onAdd(item)} className="add">+</button>
                                {item.quantity}
                                <button onClick={()=>onRemove(item)} className="remove">-</button>
                            </span>
                            <span className="calculation">${item.cost}</span>  
                        </span>
                    </div>
                </div>
                ))
            )
        }
    }
    return (
        <>
        <main className="col-2">
            <h3 className="cart-section">Your Bag</h3>
            <div>
                <EmptyCart />
                <ShowCart />
            </div>
        </main>
        </>
    )
}