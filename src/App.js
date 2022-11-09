import React from "react";
import Navbar from "./component/NavBar"
import Footer from "./component/Footer"
import About from "./component/About"
import Contact from "./component/Contact"
import Product from "./component/Product"
import ShippingReturn from "./component/Shipping-Return"

export default function App() {
    const [MyContent, setMyContent] = React.useState("home")
    const Content = () => {
        if (MyContent === "home") {
            return (
                <About />
            )
        }
        else if (MyContent === "product") {
            return (
                <Product />
            )
        }
        else if (MyContent === "about") {
            return (
                <>
                <About />
                </>
            )
        }
        else if (MyContent === "shipping/return") {
            return (
                <>
                <ShippingReturn />
                </>
            )
        } else {
            return (
                <>
                <Contact />
                </>
            )
        }
    }
    return (
        <div>
            <Navbar 
                onClick = {setMyContent}
            />
            <Content />
            <Footer 
                onClick = {setMyContent}
            />
        </div>
    )
}