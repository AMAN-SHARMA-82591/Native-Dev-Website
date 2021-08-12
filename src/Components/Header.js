import React from 'react'
import '../App.css'
import Img1 from '../Images/facebook-logo.png'
import Img2 from '../Images/bing-logo.png'
import Img3 from '../Images/google-ads.png'
import Img4 from '../Images/yahoo-search.png'
import PersonPointingImage from '../Images/person-pointing.jpg'

function Header() {
    
    return (
        <div className="header-section">
            <img className="header-main-image" alt="" src={PersonPointingImage} />
            <div data-aos="fade-up" className="header-sec-cont-item1">
                <h1 className="header-sec-item-1-h1">Smart Ideas For Your Brand Are Here.</h1>
                <p className="header-sec-item-1-p"> HeyLead is all about lead generation and helping small businesses grow through digital marketing services and technologies.</p>
                <button className="header-sec-item-1-button">Get Started</button>
            </div>
            <div data-aos="fade" className="header-sec-cont-item2">
                <img  className="header-sec-logo-item" src={Img1} alt="" />
                <img className="header-sec-logo-item"  src={Img2} alt="" />
                <img className="header-sec-logo-item"  src={Img3} alt="" />
                <img  className="header-sec-logo-item" src={Img4} alt="" />
            </div>
        </div>
    )
}

export default Header
