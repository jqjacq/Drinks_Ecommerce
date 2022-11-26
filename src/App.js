import React from "react";
import ImageChanger from "./component/ImageChanger";
import Navbar from "./component/NavBar"
import Footer from "./component/Footer"
import About from "./component/About"
import Contact from "./component/Contact"
import Product from "./component/Product"
import ShippingReturn from "./component/Shipping-Return"
import Tea from "./component/Tea"
import Coffee from "./component/Coffee"
import ShoppingCart from "./component/ShoppingCart"

export default function App() {
    const [cartItems, setCartItems] = React.useState([])
    const onAdd = (product) => {
        const exist = cartItems.find((x) => x.id === product.id)
        if (exist) {
            setCartItems (
                cartItems.map((x) => 
                x.id === product.id ? {...exist, qty: exist.qty + 1} : x
                )
            )
        } else {
            setCartItems([...cartItems, {...product, qty: 1}])
        }
    }
    const [MyContent, setMyContent] = React.useState("home")
    const Content = () => {
        if (MyContent === "home" || MyContent === "about") {
            return (
                <About />
            )
        }
        else if (MyContent === "product") {
            return (
                <Product 
                    onAdd = { onAdd }/>
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
        } else if (MyContent === "cart") {
            return (
                <>
                <ShoppingCart 
                    cartItems = { cartItems }
                    onAdd = { onAdd }/>
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
            <ImageChanger />
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