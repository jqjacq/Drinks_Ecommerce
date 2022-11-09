import React from "react"

export default function NavBar(props) {
    return (
        <>
        <div className="navBar-container">
            <p className="logo">
                 <i class="fa-solid fa-leaf fa-lg"></i>
                 JQ's Tea and Coffee Store
               
            </p>
            <ul>
                <li onClick={()=> props.onContentChange("home")}>Home</li>
                <li onClick={()=> props.onContentChange("product")}>Product</li>
                <li onClick={()=> props.onContentChange("contact")}>Contact</li>
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
        </>
    )
}