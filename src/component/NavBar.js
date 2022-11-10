import React from "react"
// import SearchList from "./SearchList"

export default function NavBar(props) {
    return (
        <>
        <div className="navBar-container" style={{"textAlign":"center"}}> 
            {/* <p className="navs">
                <span className="logo">
                    <i class="fa-solid fa-leaf fa-lg"></i>
                    JQ's Tea and Coffee Store </span>
            </p> */}
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