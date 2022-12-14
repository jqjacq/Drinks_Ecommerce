import React from "react"
import { Link } from "react-router-dom"
export default function Footer(props) {
    return (
        <>
        <footer className="footer">
            <br></br>
            <p className="socialmedia">
                <a href="https://www.github.com/jqjacq" alt="Github">
                <i className="fa-brands fa-2x fa-github"></i></a>
                <a href="https://www.facebook.com" alt="Facebook Page">
                <i className="fa-brands fa-2x fa-facebook"></i></a>
                <a href="https://www.instagram.com" alt="Instagram Page">
                <i className="fa-brands fa-2x fa-instagram"></i></a>
                <a href="https://www.twitter.com" alt="Twitter Page">
                <i className="fa-brands fa-2x fa-twitter"></i></a>
                <a href="https://www.youtube.com" alt="YouTube Page">
                <i className="fa-brands fa-2x fa-youtube"></i></a>
            </p>
            <span className="additionalinfo">
                <Link to="/"> About </Link>
                <Link to="/shippingreturn"> Shipping & Return </Link>
                <Link to="/contact"> Feedbacks</Link>
            </span>
                 {/* <ul>
                    <li onClick={()=> props.onClick("about")}>About us</li>
                    <li onClick={()=> props.onClick("shipping/return")}>Shipping & Return </li>
                    <li onClick={()=> props.onClick("contact")}>Feedbacks</li>
                </ul> */}
            <hr></hr>
            <div className="centertext">
                <span>COPYRIGHT © JQ's Coffee & Tea Co., All rights reserved</span> 
                <span>· THIS IS NOT AN ACTUAL PRODUCT FOR SALE.</span> 
            </div>
        </footer>
        </>
    )
}