import React from "react"

export default function Footer() {
    return (
        <footer className="footer">
            <br></br>
            <p className="socialmedia">
                <i class="fa-brands fa-lg fa-github"></i>
                <i class="fa-brands fa-lg fa-facebook"></i>
                <i class="fa-brands fa-lg fa-instagram"></i>
                <i class="fa-brands fa-lg fa-twitter"></i>
                <i class="fa-brands fa-lg fa-youtube"></i>
            </p>
            <p className="additionalinfo">
                <ul>
                    <li>About us</li>
                    <li>Shipping Status</li>
                    <li>Return Policy</li>
                    <li>Feedback</li>
                    <li>Location</li>
                    <li>Contact Us</li>
                </ul>
            </p>
            <hr></hr>
            <div className="copyright">
                <span>COPYRIGHT © JQ Tea and Coffee Co., All rights reserved</span> 
                <span>· THIS IS NOT AN ACTUAL PRODUCT FOR SALE.</span> 
            </div>
        </footer>
    )
}