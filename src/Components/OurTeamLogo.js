import React, { useEffect } from 'react'
import '../App.css'

import AOS from 'aos'
function OurTeamLogo(props) {
    useEffect(() =>{
        AOS.init({
            duration:1000,
            easing:'ease',
            offset:50,
        })
    })
    return (
        <div data-aos="slide-up" className="our-team-logo">
                <div >
                    <img className="our-team-logo-img-item" alt="" src={props.person} />
                </div>
                <div>
                    <h1 className="our-team-logo-h1-item">{props.logoName}</h1>
                    <p className="our-team-logo-p-item">{props.logoWork}</p>
                </div>

        </div>
    )
}

export default OurTeamLogo
