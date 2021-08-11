import React from 'react'
import WhatWeDoContent from './WhatWeDoContent'
import BarChart from '../Images/bar-chart.png'
import Website from '../Images/website-logo.png'
import Engine from '../Images/egine-logo.png'
import Person from '../Images/person-logo.png'
import Report from '../Images/report-logo.png'
import Speaker from '../Images/speaker-logo.png'

function WhatWeDo() {
    return (
        <div className="what-we-do-section"> 
            <h1 className="what-we-do-main-h1">What We Do</h1>
            <div className="what-we-do-responsive">
                <div className="what-we-do-items-container">
                        <div>
                                <WhatWeDoContent socialImage={BarChart} socialTexth1="Social Engine Marketing (SEM)" socialTextp="There were 3.5 billion searches on Google today. Did you advertisements reach the right" />
                        </div>
                        <div>
                                <WhatWeDoContent socialImage={Website} socialTexth1="Website Development & Optimization" socialTextp="We mix creativity with strategy to develop search engine optimized and user-friendly websites that" />
                                
                                <WhatWeDoContent  socialImage={Engine} socialTexth1="Social Engine Optimization (SEO)" socialTextp="HeyLead is a team of dedicated and proactive SEO experts that can increase your search engine" />
                        </div>
                        <div>
                                <WhatWeDoContent  socialImage={Person} socialTexth1="Remarking" socialTextp="There were 3.5 billion searches on Google today. Did your advertisements reach the right" />
                                
                                <WhatWeDoContent  socialImage={Report} socialTexth1="Reporting" socialTextp="If you don't measure, you can't improve.Measurement and Analytics will reveal the overall success of your" />
                                
                                <WhatWeDoContent  socialImage={Speaker} socialTexth1="Social Media Advertising" socialTextp="Social Media is a critical way to earn and retain customers. HeyLead makes sure your" />
                        </div>
                
                </div>
            </div>
        </div>
    )
}

export default WhatWeDo
