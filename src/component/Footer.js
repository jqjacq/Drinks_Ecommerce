import React from "react"
import { Link } from "react-router-dom"
export default function Footer(props) {
    return (
        <>
        <footer className="footer">
            <br></br>
            <p className="socialmedia">
                <a target="_new" href="https://www.github.com/jqjacq" alt="Github">
                <i className="fa-brands fa-2x fa-github"></i></a>
                <a target="_new" href="https://www.facebook.com" alt="Facebook Page">
                <i className="fa-brands fa-2x fa-facebook"></i></a>
                <a target="_new" href="https://www.instagram.com" alt="Instagram Page">
                <i className="fa-brands fa-2x fa-instagram"></i></a>
                <a target="_new" href="https://www.twitter.com" alt="Twitter Page">
                <i className="fa-brands fa-2x fa-twitter"></i></a>
                <a target="_new" href="https://www.youtube.com" alt="YouTube Page">
                <i className="fa-brands fa-2x fa-youtube"></i></a>
            </p>
            <span className="additionalinfo">
                <Link to="/"> About </Link>
                <Link to="/shippingreturn"> Shipping & Return </Link>
                <Link to="/contact"> Feedbacks</Link>
            </span>
            <hr></hr>
            <div className="centertext">
                <span>COPYRIGHT 2022 © JQ's Coffee & Tea Co., All rights reserved</span> 
                <span>· THIS IS NOT AN ACTUAL PRODUCT FOR SALE.</span> 
            </div>
        </footer>
        </>
    )
}