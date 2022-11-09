import React from "react"

export default function Contact() {
    return (
        <form>
            <fieldset>
                <legend>
                    <i class="fa-regular fa-address-card"></i>
                    Contact us
                </legend>
                <p className="contact-headline">Got any questions, suggestions, or concerns? Feel free to let us know!</p>
                    <div className="contact-container">
                    <label for="first-name">Full Name:</label>
                        <input type="text" id="full-name" 
                        placeholder="Joe Smith"></input>
                    <label for="email">Email:</label>
                        <input type="email" id="email" 
                        placeholder="joes1@gmail.com"></input>  
                    <label for="phonenumber">Phone Number:</label>
                        <input type="tel" id="telephone" pattern="[0-9]{3}-[0-9]{3}- [0-9]{4}" 
                        placeholder="123-456-7890"></input> 
                    <label for="message"> Message: </label>
                        <textarea id="message" rows="5"></textarea>
                </div>
                    <div className="submit-button">
                    <button className="contact-button" type="submit">Submit</button>
                    </div>
            </fieldset>
            <div className = "location-container">
            <h4> 
                <i class="fa-solid fa-location-dot"></i>
                Where are we located? </h4> 
            <p> Factory Address:
                1234 Cool Ave, Awesome City, AC, 12345 </p> 
            <p> Cafe Address:
                5555 Cafe Ave, Coffee City, CC, 54321 </p>
        </div>
        </form>
    )
}