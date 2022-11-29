//To test out contact being submitted, use npx json-server --watch src/data/contactinfo.json --port 8000
// --port: 8000 since that is where the data is being fetched.
// submitted data will show up on contactinfo.json file

import React, { useState } from "react"

export default function Contact() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phonenumber, setPhoneNumber] = useState("")
    const [message, setMessage] = useState("")
    const [preference, setPreference] = useState("")
    const [isSubmitting, setisSubmitting] = useState(false)
    
    const handleSubmit = (e) => {
        e.preventDefault()
        const timestamp = new Date()
        const contactinfo = { name, email, phonenumber, message, preference, timestamp }

        setisSubmitting(true)

        fetch(' http://localhost:8000/contactinfo', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(contactinfo)
        }).then(() => {
            setisSubmitting(false)
        })
    }
    return (
        <>
            <h1 className="centertext"><i className="fa-solid fa-address-card contacthead"></i>Contact us</h1>
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
                    <div className="centertext">
                        { !isSubmitting && <button className="contact-button bold" type="submit">Submit</button> }
                        { isSubmitting && <button className="contact-button bold" type="submit" style={{"width":"400px"}}>Submitting... Stuck on load because server is currently not running.</button> }
                    </div>
                </fieldset>


            <div className = "centertext">
                <h4> 
                <i className="fa-solid fa-location-dot"></i>
                Where are we located? </h4> 
                <p> Factory Address:
                1234 Cool Ave, Awesome City, AC, 12345 </p> 
                <p> Cafe Address:
                5555 Cafe Ave, Coffee City, CC, 54321 </p>
            </div>
            </form>
        </>
    )
}