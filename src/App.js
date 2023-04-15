import React from "react";
import CoverImage from "./component/CoverImage";
import Navbar from "./component/NavBar"
import Footer from "./component/Footer"
import About from "./component/About"
import Contact from "./component/Contact"
import ShippingReturn from "./component/Shipping-Return"
import AllProduct from "./component/AllProduct";
// import Product from "./component/Product"
// import Tea from "./component/Tea"
// import Coffee from "./component/Coffee"
import ShoppingCart from "./component/ShoppingCart"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

export default function App() {
    const [cartItems, setCartItems] = React.useState([])
    //Add item to cart
    const onAdd = (product) => {
        const findItem = cartItems.find((item) => item.id === product.id)
        if (findItem) {
            setCartItems (cartItems.map(
                    item => item.id === product.id ? {...findItem, quantity: findItem.quantity + 1} : item))
        } else {
            setCartItems([...cartItems, {...product, quantity: 1}])
        }
    }
    //Remove item to cart
    const onRemove = (product) => {
        const findItem =  cartItems.find((item) => item.id === product.id)
        if (findItem.quantity === 1) {
            setCartItems(cartItems.filter((item) => item.id !== product.id))
        } else {
            setCartItems (cartItems.map(
                    item => item.id === product.id ? {...findItem, quantity: findItem.quantity - 1} : item))
        }
    }
    return (
        <Router>
            <CoverImage />
            <Navbar 
            // onClick = {setMyContent}
            />
                <Switch>
                    <Route exact path="/">
                        <About />
                    </Route>
                    <Route path="/shippingreturn">
                        <ShippingReturn />
                    </Route>
                    <Route path="/allproducts">
                        <AllProduct />
                    </Route>
                    {/* <Route path="/product">
                        <Product 
                            onAdd = { onAdd }
                            onRemove = { onRemove }/>
                    </Route> */}
                    {/* <Route path="/coffee">
                        <Coffee 
                            onAdd = { onAdd }
                            onRemove = { onRemove }/>
                    </Route>
                    <Route path="/tea">
                        <Tea 
                            onAdd = { onAdd }
                            onRemove = { onRemove }
                        />
                    </Route> */}
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
            <Footer  />
        </Router>
    )
}