import React from 'react'
import Logo from '../Images/heyleadIcon.png'
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import EmailIcon from '@material-ui/icons/Email';
import CallIcon from '@material-ui/icons/Call';


function Footer() {
    return (
        <div style={{background:"#ffe4e0"}}>
            <div className="footer-section">
                    <div className="footer-cont-sec-1">
                        <img src={Logo} alt="" />
                        <div>
                            <p>
                                Heylead is all about lead generation and helping small businesses grow through digital marketing services and technologies.
                            </p>
                            <div>
                                <FacebookIcon className="footer-logo-item-small" fontSize="large" />
                                <TwitterIcon className="footer-logo-item-small" fontSize="large" />
                            </div>
                        </div>
                    </div>
                    <div className="footer-cont-sec-2">
                            <h1>About</h1>
                            <div>
                                <ul>
                                    <li>Who we are?</li>
                                    <li>Terms and Conditions</li>
                                    <li>Privacy Policy</li>
                                    <li>Sitemap</li>
                                </ul>
                            </div>
                    </div>
                    <div className="footer-cont-sec-2">
                    <h1>Contact Us</h1>
                    <div>
                        <ul>
                            <li><LocationOnIcon  style={{color:"#1a2f40",padding:"5px 15px 0px 0px"}}/> <p> 3729 Southern Avenue Des Moines, IA 50309</p> </li>
                            <li><EmailIcon style={{color:"#1a2f40",padding:"2px 15px 0px 0px"}} /> <p>info@heylead.com </p> </li>
                            <li><CallIcon  style={{color:"#1a2f40",padding:"3px 15px 0px 0px"}}/> <p>(415) 857-5323 </p>  </li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Footer
