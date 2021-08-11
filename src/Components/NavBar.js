import React,{useState,useEffect,useRef} from 'react'
import '../App.css'
import HeyleadIcon from '../Images/heyleadIcon.png'
import InputIcon from '@material-ui/icons/Input';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
function NavBar() {
    let [show,setShow] = useState(false);
    let menuRef = useRef(null)
    useEffect(() =>{
        let handler = (event) => {
            if(!menuRef.current.contains(event.target)){
                setShow(false)
            }
        }
        document.addEventListener('mousedown', handler)
        return () => {
            document.removeEventListener('mousedown',handler)
        }
    })
    setTimeout(() =>{
        console.log('hello')
    },3000)

    return (
        <div ref={menuRef} className="navbar-section-contents">
        <div className="navbar-section">
                <div className="navbar-logo-sec">
                        <img src={HeyleadIcon} alt=""/>
                </div>  
                <div className={show?"responsive-display":"responsive-display button"}>
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
            
                <div className="responsive-header-button active">
                        <MenuRoundedIcon style={{fontSize:35,padding:"0px 10px"}} onClick={() => setShow(!show)} />
                       
                        
                </div>
        </div>
              

        </div>
    )
}

export default NavBar
