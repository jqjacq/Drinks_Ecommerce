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
            </ul>
        </div>
    )
}