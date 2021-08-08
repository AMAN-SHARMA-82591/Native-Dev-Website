import React from 'react'
import Person1 from '../Images/person_1.jpg'

function OurTeamLogo(props) {
    return (
        <div className="our-team-logo">
                <div>
                    <img alt="" src={Person1} />
                </div>
                <div>
                    <h1>{props.logoName}</h1>
                    <p>{props.logoWork}</p>
                </div>

        </div>
    )
}

export default OurTeamLogo
