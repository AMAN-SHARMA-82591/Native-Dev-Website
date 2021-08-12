import React from 'react'
import OurTeamLogo from './OurTeamLogo'
import Person1 from '../Images/person_1.jpg'
import Person2 from '../Images/person_2.jpg'
import '../App.css'
import Person3 from '../Images/person_3.jpg'
import Person4 from '../Images/pic01.jpg'
import Person5 from '../Images/pic02.jpg'
import Person6 from '../Images/pic03.jpg'
import Person7 from '../Images/team-2.jpg'
import Person8 from '../Images/team-4.jpg'
import Person9 from '../Images/team-6.jpg'

function OurTeam() {
    return (
        <div className="our-team-main-section">
                <h1 className="our-team-logo-name">Our Team</h1>
             <div className="responsive-our-team-sec">
                <div className="our-team-logo-section">
                    <div>
                        <OurTeamLogo person={Person1} className="our-team-logo-work" logoName="Margin" logoWork="Co-Founder and Partner" />
                        <OurTeamLogo person={Person2} className="our-team-logo-work" logoName="Sean" logoWork="Seior Developer" />
                    </div>
                    <div>
                        <OurTeamLogo person={Person4} className="our-team-logo-work" logoName="Milena" logoWork="Co-Founder and Partner" />
                        <OurTeamLogo person={Person5} className="our-team-logo-work" logoName="Kathryn" logoWork="Web Developer/Web Front End Developer" />
                    </div>
                    <div>
                        <OurTeamLogo person={Person6} className="our-team-logo-work" logoName="Ryan" logoWork="Business Development" />
                        <OurTeamLogo person={Person3} className="our-team-logo-work" logoName="Azeem" logoWork="Copywriter" />
                    </div>
                    <div>
                        <OurTeamLogo person={Person8} className="our-team-logo-work" logoName="Julia" logoWork="Product Designer" />
                        <OurTeamLogo person={Person7} className="our-team-logo-work" logoName="Vasili Savitski" logoWork="Senior Designer" />
                        <OurTeamLogo person={Person9} className="our-team-logo-work" logoName="Nani" logoWork="Front End Web" />
                    </div>
                </div>
            </div>
        
        </div>
    )
}

export default OurTeam
