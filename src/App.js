import React from "react";
import Navbar from "./component/NavBar"
import Footer from "./component/Footer"
import About from "./component/About"
import Contact from "./component/Contact"
import Product from "./component/Product"
import Location from "./component/Location"
import Return from "./component/Return"
import Shipping from "./component/Shipping"

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
        else if (MyContent === "shipping") {
            return (
                <>
                <Shipping />
                </>
            )
        } else if (MyContent === "return") {
            return (
                <>
                <Return />
                </>
            )
        } else if (MyContent === "feedback") {
            return (
                <>
                <Contact />
                </>
            )
        } else if (MyContent === "location") {
            return (
                <>
                <Location />
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
                onContentChange = {setMyContent}
            />
            <Content />
            <Footer 
                onContentChange = {setMyContent}
            />
        </div>
    )
}