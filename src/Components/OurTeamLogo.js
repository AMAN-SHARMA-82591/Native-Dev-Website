import React  from 'react'
import '../App.css'

function OurTeamLogo(props) {
   
    return (
        <div className="our-team-logo">
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
