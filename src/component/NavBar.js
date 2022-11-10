import React from "react"
// import ShoppingCart from "./ShoppingCart"
// import SearchList from "./SearchList"

export default function NavBar(props) {
    return (
        <>
        <div className="navBar-container"> 
            <ul>
                <li onClick={()=> props.onClick("home")}>Home</li>
                <li onClick={()=> props.onClick("product")}>Product</li>
                <li onClick={()=> props.onClick("contact")}>Contact</li>
                {/* <li> <SearchList /> </li> */}
                {/* <li>
                    <input type="text" className="search" placeholder="Search..."></input> 
                    <i class="fa-solid fa-magnifying-glass"></i>
                </li> */}
                <li>
                    {/* <ShoppingCart /> */} 
                     <button className="shoppingCart">
                        <i className="fa-solid fa-cart-shopping"></i>
                        <span className="cart">0</span>
                    </button>
                </li>
            </ul>
        </div>
        </>
    )
}