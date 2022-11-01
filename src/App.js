import React from "react";
import Navbar from "./component/NavBar"
import About from "./component/About"
import Product from "./component/Product"
import Contact from "./component/Contact"
import Footer from "./component/Footer"

//will import data to map... 
// import coffeeData from "./data/coffeedata"
// import teaData from "./data/teadata"


export default function App() {
    return (
        <div>
            <Navbar />
            <About />
            <Product />
            <Contact />
            <Footer />
        </div>
    )
}