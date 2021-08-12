import React,{useEffect} from 'react'
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import Aos from 'aos';
function WhatWeDoContent(props) {
    useEffect(() =>{
        Aos.init({
            duration:1000,
            offset:30,
            easing:'ease-out',
            delay:50
        })
    })
    return (
        <div data-aos="slide-up" className="what-we-do-main-component">
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
