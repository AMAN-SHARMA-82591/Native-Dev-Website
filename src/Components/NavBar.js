import React from 'react'
import '../App.css'
import HeyleadIcon from '../Images/heyleadIcon.png'
import InputIcon from '@material-ui/icons/Input';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
function NavBar() {
    return (
        <div className="navbar-section-contents">
        <div className="navbar-section">
                <div className="navbar-logo-sec">
                        <img src={HeyleadIcon} alt=""/>
                </div>  
                <div className="responsive-display">
                    <div className="navbar-list-items-sec">
                        <ul>
                            <li className="list-items active">Home</li>
                            <li className="list-items">Services</li>
                            <li className="list-items">About</li>
                            <li className="list-items">Contact Us</li>
                        </ul>
                    </div>
                    <div className="navbar-button-sec">
                            <buttom className="navbar-btn-item"><InputIcon style={{fontSize:13,paddingRight:"15px"}} /> Log in </buttom>
                    </div>

                </div>
            
                <div className="responsive-header-button">
                        <MenuRoundedIcon />
                </div>
        </div>
              

        </div>
    )
}

export default NavBar
