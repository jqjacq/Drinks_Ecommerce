import React from "react";
import Navbar from "./component/NavBar"
import Footer from "./component/Footer"
import Home from "./component/Home"
import Contact from "./component/Contact"
import Product from "./component/Product"
import ShippingReturn from "./component/Shipping-Return"
import Tea from "./component/Tea"
import Coffee from "./component/Coffee"
import ShoppingCart from "./component/ShoppingCart"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

export default function App() {
    const [cartItems, setCartItems] = React.useState([])
    const onAdd = (product) => {
        const exist = cartItems.find((x) => x.id === product.id)
        if (exist) {
            setCartItems (
                cartItems.map(
                    x => x.id === product.id ? {...exist, quantity: exist.quantity + 1} : x
                )
            )
        } else {
            setCartItems([...cartItems, {...product, quantity: 1}])
        }
    }
    const onRemove = (product) => {
        const exist =  cartItems.find((x) => x.id === product.id)
        if (exist.quantity === 1) {
            setCartItems(cartItems.filter((x) => x.id !== product.id))
        } else {
            setCartItems (
                cartItems.map(
                    x => x.id === product.id ? {...exist, quantity: exist.quantity - 1} : x
                )
            )
        }
    }
    return (
        <Router>
            <Navbar />
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/product">
                        <Product 
                            onAdd = { onAdd }
                            onRemove = { onRemove }/>
                    </Route>
                    <Route path="/shippingreturn">
                        <ShippingReturn />
                    </Route>
                    <Route path="/coffee">
                        <Coffee 
                            onAdd = { onAdd }
                            onRemove = { onRemove }/>
                    </Route>
                    <Route path="/tea">
                        <Tea 
                            onAdd = { onAdd }
                            onRemove = { onRemove }
                        />
                    </Route>
                    <Route path="/cart">
                        <ShoppingCart 
                            cartItems = { cartItems }
                            onAdd = { onAdd }
                            onRemove = { onRemove }
                        />
                    </Route>
                    <Route path="/contact">
                        <Contact />
                    </Route>
                </Switch>
             {/* <Content /> */}
            <Footer 
                // onClick = {setMyContent}
            />
        </Router>
    )
}

    //Alternative to routing -- slower load time.
    // const [MyContent, setMyContent] = React.useState("home")
    // const Content = () => {
    //     if (MyContent === "home" || MyContent === "about") {
    //         return (
    //             <About />
    //         )
    //     }
    //     else if (MyContent === "product") {
    //         return (
    //             <Product 
    //                 onAdd = { onAdd }
    //                 onRemove = {onRemove} />
    //         )
    //     }
    //     else if (MyContent === "shipping/return") {
    //         return (
    //             <>
    //             <ShippingReturn />
    //             </>
    //         )
    //     } else if(MyContent === "coffee") {
    //         return (
    //             <>
    //             <Coffee 
    //                 onAdd = { onAdd }
    //                 onRemove = {onRemove} />
    //             </>
    //         )
    //     } else if (MyContent === "tea") {
    //         return(
    //             <>
    //             <Tea 
    //                 onAdd = { onAdd }
    //                 onRemove = {onRemove} />
    //             </>    
    //         )
    //     } else if (MyContent === "cart") {
    //         return (
    //             <>
    //             <ShoppingCart 
    //                 cartItems = { cartItems }
    //                 onAdd = { onAdd }
    //                 onRemove = {onRemove} />
    //             </>
    //         )
    //     }
    //     else { 
    //         return (
    //             <>
    //             <Contact />
    //             </>
    //         )
    //     }
    // }