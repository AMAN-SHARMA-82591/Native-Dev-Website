import React,{useEffect} from 'react'
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import AOS from 'aos'
import 'aos/dist/aos.css'

function LatestBlogsComp(props) {
    useEffect(() =>{
        AOS.init()
})
    return (
        <div data-aos="slide-up" data-aos-delay={props.delay}  data-aos-duration={props.duration}>
                <div  className="latest-blogs-content-section">
                            <img  className="latest-blogs-cont-item-img" alt="" src={props.latestBlogsImg} />
                            <div>
                                <h1 className="latest-blogs-cont-item-h1">{props.latestBlogsH1}</h1>
                                <p  className="latest-blogs-cont-item-p">{props.latestBlogsP}</p>
                                
                            </div>
                            <div  className="latest-blogs-arrow-right">
                                <ArrowRightAltIcon style={{color:'#24658d'}} fontSize="large"/>
                            </div>

                </div>
        </div>
    )
}

export default LatestBlogsComp
