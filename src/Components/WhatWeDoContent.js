import React from 'react'
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import '../App.css'

import Aos from 'aos';
function WhatWeDoContent(props) {
    return (
        <div  className="what-we-do-main-component">
                    <div className="what-we-do-image">
                        <img alt="" src={props.socialImage} />
                    </div>
                    <div className="what-we-do-h1">
                        <h1>
                            {props.socialTexth1}
                        </h1>
                    </div>
                    <div className="what-we-do-p">
                            <p>
                                {props.socialTextp}
                            </p>
                            <ArrowRightAltIcon className="what-we-do-arrow-btn" fontSize="large" />
                    </div>
        </div>  
    )
}

export default WhatWeDoContent
