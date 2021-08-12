import React, { useState } from 'react'
import '../App.css'

function Subscribe() {
    let [newValue,setValue] = useState('')
     
    let handleChange = e =>{
        setValue(e.target.value)
    }
    let handleKeyPress = (event) =>{
        let newText = `Your email id: ${newValue} has been submitted.`
        if(event.key === 'Enter'){
            alert(newText)
            setValue('')
        }
        else if(event.type === 'click'){
            alert(newText)
            setValue('')
        }
    }

    return (
        <div className="subscribe-main-section">
            <h1 className="subscribe-item-cont-h1">
                Subscribe To Get The Latest New About Us
            </h1>
            <p className="subscribe-item-cont-p">
                We recommend you to subscribe to our newspaper, drop your email below to get daily update about us
            </p>
            <div className="subscribe-sec-cont-item-2">
                <input value={newValue} onKeyPress={(e) =>handleKeyPress(e)} onChange={handleChange} placeholder="Enter Your Email Address" type="text" />
                <button type="submit" onClick={(e) => handleKeyPress(e)} className="subscribe-button">Subscribe</button>
            </div>
        </div>
    )
}

export default Subscribe
