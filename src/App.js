import React from "react";
import MainImage from "./component/MainImage";
import Navbar from "./component/NavBar"
import Footer from "./component/Footer"
import About from "./component/About"
import Contact from "./component/Contact"
import Product from "./component/Product"
import ShippingReturn from "./component/Shipping-Return"
import Tea from "./component/Tea"
import Coffee from "./component/Coffee"

export default function App() {
    const [MyContent, setMyContent] = React.useState("home")
    // const [cartItem, setCartItems] = useState([])
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
        } else if(MyContent === "coffee") {
            return (
                <>
                <Coffee />
                </>
            )
        } else if (MyContent === "tea") {
            return(
                <>
                <Tea />
                </>    
            )
        }
        else { 
            return (
                <>
                <Contact />
                </>
            )
        }
    }
    return (
        <div>
            <MainImage />
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