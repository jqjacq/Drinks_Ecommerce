import React from "react"

export default function Footer(props) {
    return (
        <>
        <footer className="footer">
            <br></br>
            <p className="socialmedia">
                <a href="https://www.github.com/jqjacq" alt="Github">
                <i class="fa-brands fa-2x fa-github"></i></a>
                <a href="https://www.facebook.com" alt="Facebook Page">
                <i class="fa-brands fa-2x fa-facebook"></i></a>
                <a href="https://www.instagram.com" alt="Instagram Page">
                <i class="fa-brands fa-2x fa-instagram"></i></a>
                <a href="https://www.twitter.com" alt="Twitter Page">
                <i class="fa-brands fa-2x fa-twitter"></i></a>
                <a href="https://www.youtube.com" alt="YouTube Page">
                <i class="fa-brands fa-2x fa-youtube"></i></a>
            </p>
            <p className="additionalinfo">
                <ul>
                    <li onClick={()=> props.onContentChange("about")}>About us</li>
                    <li onClick={()=> props.onContentChange("shipping")}>Shipping Status</li>
                    <li onClick={()=> props.onContentChange("return")}>Return Policy</li>
                    <li onClick={()=> props.onContentChange("feedback")}>Feedback</li>
                    <li onClick={()=> props.onContentChange("location")}>Location</li>
                    <li onClick={()=> props.onContentChange("contact")}>Contact Us</li>
                </ul>
            </p>
            <hr></hr>
            <div className="copyright">
                <span>COPYRIGHT © JQ Tea and Coffee Co., All rights reserved</span> 
                <span>· THIS IS NOT AN ACTUAL PRODUCT FOR SALE.</span> 
            </div>
        </footer>
        </>
    )
}