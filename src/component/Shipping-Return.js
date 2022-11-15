import React from "react"

export default function Shipping() {
    return (
        <div className="shippingReturn-container">
            <div className="shipping-container">
                <h1 className="shipping-header" style={{"textAlign":"center"}}> 
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
                <p className="shipping-question"> How are my orders shipped?</p>
                    The coffee beans are placed inside a sealed bag to prevent oxygen from reaching inside. 
                    The coffee will be protected with bubble wrap as a protective barrier 
                    The coffee will be shipped through the post office. 
                    
                <p className="shipping-question"> When do orders ship?</p>
                    Once we receive the orders, it will take 1-3 business day for us to prepare the order.
                    Once the order has been prepared, we will immediately ship it through the post office.
                    
                <p className="shipping-question"> Do you ship internationally? </p>
                    If the shipping address is outside of US, there will be an additional $15.00 for shipping. 
                    Standand shipping will cost $23.99 and expedited shipping will cost $39.99.
                    
                <p className="shipping-question"> How is shipping price calculated?</p>
                    The shipping price is calculated based on amount purchase and weight. For any order over $99, you will receive free shipping. 
                    If the order exceeds over 10lb, there will be additional charges. See shipping info for what the additional charge will be. 
                    
                <p className="shipping-question"> Where is my order?</p>
                    Once your order is shipped, a tracking number will be assigned and you will receive your order information. 
            </div>
            <div className="return-container" style={{"textAlign":"center"}}>
                <h1> 
                    <i class="fa-solid fa-box"></i>
                    Returns </h1>
                <p>
                    To make sure you are completely satisfied, you may return the coffee within 45 days of the purchase date for a full refund (excluding shipping and handling). Shipping and handling charges are non-refundable. Please allow at least 1-2 weeks for refund and processing time.
                </p>
    
                <p>
                    If you wish to contact us or have any other questions, please
                    leave your message on our contact page and we will get back to you within 3 business days. 
                </p>
            </div>
        </div>
    )
}