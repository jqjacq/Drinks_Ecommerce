import React from "react";
import Navbar from "./component/NavBar"
import About from "./component/About"
import Product from "./component/Product"
import Contact from "./component/Contact"
import Footer from "./component/Footer"
import coffeeteaData from "./data/coffeetea"

export default function App() {
    const allCoffeeTea = coffeeteaData.map(coffeeteaItem => {
        return (
            <Product 
                key = {coffeeteaItem.id}
                {...coffeeteaItem}
                />
        )
    })
    return (
        <div>
            <Navbar />
                <div className=".productimage-container">
                    <div className="gridbox">
                        {allCoffeeTea}
                    </div>
                </div>
            <About />
            <Contact />
            <Footer />
        </div>
    )
}