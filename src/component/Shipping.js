import React from "react"

export default function Shipping() {
    return (
        <div className="shipping-container">
            <h1> 
                <i class="fa-solid fa-truck-fast"></i>
                Shipping Info
            </h1>
            <h3> We offer different shipping options: </h3>
                <ol>
                    <li>Any order over $99 will receive free shipping.</li>
                    <li>Standard shipping which will take 5-8 business days will cost $8.99.</li>
                    <li>Expedited 2-day shipping will cost $24.99. </li>
                    <li>Any order exceeding over 10lb will have additional charge. Additional charge would be additional $2.99 standard/$7.99 expedited for each additional pound. </li>
                </ol>
                <p> How are orders shipped?</p>
                <p> When do orders ship?</p>
                <p> Do you ship internationally? </p>
                <p> How is shipping price calculated?</p>
                <p> Where is my order?</p>
        </div>
    )
}