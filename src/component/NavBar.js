import React from "react"
// import ShoppingCart from "./ShoppingCart"
// import SearchList from "./SearchList"

export default function NavBar(props) {
    return (
        <>
        <div className="navBar-container"> 
            <ul className="navlinks">
                <li className="homes" onClick={()=> props.onClick("home")}>Home</li>
                <li onClick={()=> props.onClick("product")}>
                    <div className="dropdown">
                        <li className="btn dropdown-toggle" data-bs-toggle="dropdown">
                            Product
                            <li className="dropdown-menu">
                                <li onClick={()=> props.onClick("menu")} className="dropdown-item">Full Menu</li>
                                <li onClick={()=> props.onClick("coffee")} className="dropdown-item">Coffee</li>
                                <li onClick={()=> props.onClick("tea")} className="dropdown-item">Tea</li>
                            </li>
                        </li>
                    </div>
                </li>
                <li onClick={()=> props.onClick("contact")}>Contact</li>
                {/* <li> <SearchList /> </li> */}
                {/* <li>
                    <input type="text" className="search" placeholder="Search..."></input> 
                    <i class="fa-solid fa-magnifying-glass"></i>
                </li> */}
                <li>
                     <button className="shoppingCart">
                        <i className="fa-solid fa-cart-shopping"></i>
                        <span className="cart">0</span>
                    </button>
                </li>
                {/* <li className="login"> <span> 
                    <i className="fa-solid fa-person"></i> 
                    login </span></li> */}
            </ul>
        </div>
        </>
    )
}