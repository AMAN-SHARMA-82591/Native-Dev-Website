import React, { useState } from 'react'

function Subscribe() {
    let [value,setValue] = useState('')
        //create an alert for input email section
    console.log(value)
    return (
        <div className="subscribe-main-section">
            <h1 className="subscribe-item-cont-h1">
                Subscribe To Get The Latest New About Us
            </h1>
            <p className="subscribe-item-cont-p">
                We recommend you to subscribe to our newspaper, drop your email below to get daily update about us
            </p>
            <div className="subscribe-sec-cont-item-2">
                <input onKeyPress={(e) => setValue(e.target.value)} placeholder="Enter Your Email Address" type="text" />
                <button  className="subscribe-button">Subscribe</button>
            </div>
        </div>
    )
}

export default Subscribe
