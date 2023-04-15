import React from "react"
import '../style/shipping.css'

export default function Shipping() {
    return (
        <>
            <div className="shipandreturn-container">
                <h1 className="shipping-header centertext"> 
                    <i className="fa-solid fa-truck-fast shippinghead"></i>
                    Shipping Info
                </h1>
                <h3> We offer different shipping options: </h3>
                <ol>
                    <li>Any order over $99 will receive free shipping.</li>
                    <li>Standard shipping will take 5-8 business days and costs $8.99.</li>
                    <li>Expedited 2-day shipping will cost $24.99. </li>
                    <li>Any order exceeding over 10lb will have an additional charge. The charge would be an additional $2.99 standard/$7.99 expedited for each pound. </li>
                </ol>
                <p className="shipping-question bold"> How are my orders shipped?</p>
                    The coffee beans are placed inside a sealed bag to prevent oxygen from reaching     inside. The coffee is covered with bubble wrap as a protective barrier and shipped  through the post office.
                    
                <p className="shipping-question bold"> When do orders ship?</p>
                    Once we receive the orders, it will take 1-3 business days for us to prepare the order. Once we complete the order, we will immediately ship it through the post office.
                    
                <p className="shipping-question bold"> Do you ship internationally? </p>
                    If the shipping address is outside the US, there will be an additional $15.00. Standard shipping will cost $23.99. Expedited shipping will cost $39.99.

                <p className="shipping-question bold"> How is shipping price calculated?</p>
                    The shipping price is calculated based on the amount purchased and its weight. For any order over $99, you will receive free shipping. If it exceeds over 10lb, there will be additional charges. See the shipping info for what the additional charge will be.
                    
                <p className="shipping-question bold"> Where is my order?</p>
                    Once your order is shipped, you will receive your order information. A tracking number will be assigned. 
            </div>
            <div className="shipandreturn-container centertext">
                <h1> 
                    <i className="fa-solid fa-box returnhead"></i>
                    Returns </h1>
                <p>
                    To ensure you are completely satisfied, you may return the coffee within 45 days of the purchase date for a full refund (excluding shipping and handling). Shipping and handling charges are non-refundable. Please allow at least 1-2 weeks for refund and processing time.
                </p>
    
                <p>
                    If you wish to contact us or have any other questions, please leave your message on our contact page. We will get back to you within 3-5 business days.
                </p>
            </div>
        </>
    )
}