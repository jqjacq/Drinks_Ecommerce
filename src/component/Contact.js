import React, { useState } from "react"

export default function Contact() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phonenumber, setPhoneNumber] = useState("")
    const [message, setMessage] = useState("")
    const [preference, setPreference] = useState("")
     const handleSubmit = (e) => {
        e.preventDefault()
        const contactinfo = { name, email, phonenumber, message, preference }

        console.log(contactinfo)
    }
    return (
        <div className="contact-container">
            <h1 className="contact-header"><i className="fa-solid fa-address-card contacthead"></i>Contact us</h1>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <p className="contact-subhead">Got any questions, suggestions, or concerns? Feel free to let us know!</p>
                    <div className="contact-box">
                        <label for="first-name">Full Name:</label>
                            <input type="text" 
                                id="full-name"
                                placeholder="Joe Smith"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required></input>
                        <label for="email">Email:</label>
                            <input type="email" 
                                placeholder="joes1@gmail.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required></input>  
                        <label for="phonenumber">Phone Number:</label>
                            <input type="tel" 
                                id="telephone" 
                                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" 
                                placeholder="123-456-7890"
                                value={phonenumber}
                                onChange={(e) => setPhoneNumber(e.target.value)}
                                required></input> 
                        <label for="message"> Message: </label>
                        <textarea id="message" 
                            rows="5"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required></textarea>
                        <label for="preference"> How would you like to be communicated? </label>
                        <select
                            value={preference}
                            onChange={(e) => setPreference(e.target.value)}>
                            <option value="sendemail">Email me </option>
                            <option value="textme"> Text me </option> 
                            <option value="callme"> Call me </option>   
                        </select>
                    </div>
                    <div className="submit-button">
                    <button className="contact-button" type="submit">Submit</button>
                    </div>
                </fieldset>


            <div className = "location-container">
                <h4> 
                <i className="fa-solid fa-location-dot"></i>
                Where are we located? </h4> 
                <p> Factory Address:
                1234 Cool Ave, Awesome City, AC, 12345 </p> 
                <p> Cafe Address:
                5555 Cafe Ave, Coffee City, CC, 54321 </p>
            </div>
            </form>
        </div>
    )
}