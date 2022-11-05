import React from "react"

export default function NavBar() {
    return (
        <div className="navBar-container">
            <p className="logo">
                 <i class="fa-solid fa-leaf fa-lg"></i>
                 JQ's Tea and Coffee Store
               
            </p>
            <ul>
                <li>About</li>
                <li>Product</li>
                <li>Contact</li>
                <li>
                    <input type="text" className="search" placeholder="Search..."></input> 
                    <i class="fa-solid fa-magnifying-glass"></i>
                </li>
                <li>
                    <button className="shoppingCart">
                        <i class="fa-solid fa-cart-shopping"></i>
                        <span className="cart">0</span>
                    </button>
                </li>

            </ul>
        </div>
    )
}