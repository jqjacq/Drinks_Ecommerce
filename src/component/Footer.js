import React from "react"
import { Link } from "react-router-dom"
export default function Footer(props) {
    return (
        <>
        <footer className="footer-container">
            <br></br>
            <p className="footer-socialmedia">
                <a target="_new" href="https://www.github.com/jqjacq" alt="Github">
                <i className="fa-brands fa-2x fa-github"></i></a>
                <a target="_new" href="https://www.facebook.com" alt="Facebook Page">
                <i className="fa-brands fa-2x fa-facebook blue"></i></a>
                <a target="_new" href="https://www.instagram.com" alt="Instagram Page">
                <i className="fa-brands fa-2x fa-instagram red"></i></a>
                <a target="_new" href="https://www.twitter.com" alt="Twitter Page">
                <i className="fa-brands fa-2x fa-twitter blue"></i></a>
                <a target="_new" href="https://www.youtube.com" alt="YouTube Page">
                <i className="fa-brands fa-2x fa-youtube red"></i></a>
            </p>
            <p className="footer-additionalinfo">
                <Link to="/" className="links"> About </Link>
                <Link to="/shippingreturn" className="links"> Shipping & Return </Link>
                <Link to="/contact" className="links"> Feedbacks</Link>
            </p>
            <hr></hr>
            <div className="centertext">
                <span>COPYRIGHT 2022 © JQ's Coffee & Tea Co., All rights reserved</span> 
                <span>· THIS IS NOT AN ACTUAL PRODUCT FOR SALE.</span> 
            </div>
        </footer>
        </>
    )
}