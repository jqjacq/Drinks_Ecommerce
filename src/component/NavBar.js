import React from "react"
import About from "./About"
import Contact from "./Contact"
import Product from "./Product"


export default function NavBar() {
    const [Content, setContent] = React.useState("home")
    const MyContent = () => {
        if (Content === "home") {
            return (
                <About />
            )
        }
        else if (Content === "product") {
            return (
                <Product />
            )
        } else {
            return (
                <Contact />
            )
        } 
    }
    return (
        <>
        <div className="navBar-container">
            <p className="logo">
                 <i class="fa-solid fa-leaf fa-lg"></i>
                 JQ's Tea and Coffee Store
               
            </p>
            <ul>
                <li onClick={()=> setContent("home")}>Home</li>
                <li onClick={()=> setContent("product")}>Product</li>
                <li onClick={()=> setContent("contact")}>Contact</li>
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
            <MyContent />
        </>
    )
}