import React, { Component } from 'react'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"; 
import '../App.css'
import "slick-carousel/slick/slick-theme.css";
import Client1 from '../Images/client-logo-1.png'
import Client2 from '../Images/client-logo-2.png'
import Client3 from '../Images/client-logo-3.png'
import Client4 from '../Images/client-logo-4.png'
import Client5 from '../Images/client-logo-5.png'
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import HomeIcon from '@material-ui/icons/Home';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import CloudIcon from '@material-ui/icons/Cloud';
import BarChartIcon from '@material-ui/icons/BarChart';
import BusinessIcon from '@material-ui/icons/Business';


export class IndustriesAndClients extends Component {
      
    render() {
        var settings = {
          className: "center",
          infinite: true,
          centerPadding: "20px",
          slidesToShow: 4,
          autoplay:true,
          slideCount:null,
          autoplaySpeed:3000,
          slidesToScroll:1,
          swipeToSlide: true,
          dots:false,
          cssEase:'linear',
          prevArrow:<KeyboardArrowLeftIcon className="industies-forw-nd-back-icon" fontSize="small"  />,
          nextArrow:<KeyboardArrowRightIcon className="industies-forw-nd-back-icon" fontSize="small" />,
          responsive:[
            {
              breakpoint:1250,
              settings:{
                slidesToShow:3
              }
            },
            {
              breakpoint:1000,
              settings:{
                slidesToShow:2
              }
            },
            {
              breakpoint:700,
              settings:{
                slidesToShow:1,
                arrows:false
              }
            }
          ]
        };






        return (
          <>
          <div className="industries-client-section">
            <h1>Industries we've worked with</h1>
            <Slider style={{paddingLeft:"15px"}}  {...settings}>
              <div className="ind-content-item-1">
                <h3><HomeIcon className="ind-button-logo-item-1" /> Real Estate</h3>
              </div>
              <div  className="ind-content-item-1">
                <h3><LocalMallIcon className="ind-button-logo-item-1" /> Ecommerce </h3>
              </div>
              <div  className="ind-content-item-1">
                <h3><CloudIcon className="ind-button-logo-item-1" /> Cloud Computing</h3>
              </div>
              <div  className="ind-content-item-1">
                <h3><BarChartIcon className="ind-button-logo-item-1" /> Analytics</h3>
              </div>
              <div  className="ind-content-item-1">
                <h3><BusinessIcon className="ind-button-logo-item-1" /> Business</h3>
              </div>
            
            </Slider>
          </div>

        <div className="industries-client-section" >
            <h1>Our Clients</h1>
            <Slider style={{paddingLeft:"15px"}} className="industries-sec-slider" {...settings}>
              <div className="ind-content-item-1 client">
                    <img className="ind-content-image-item-1" src={Client1} alt="" />
              </div>
              <div  className="ind-content-item-1 client">
                    <img  className="ind-content-image-item-1" src={Client2} alt="" />
              </div>
              <div  className="ind-content-item-1 client">
                    <img   className="ind-content-image-item-1" src={Client3} alt="" />
              </div>
              <div  className="ind-content-item-1 client">
                    <img  className="ind-content-image-item-1" src={Client4} alt="" />
              </div>
              <div  className="ind-content-item-1 client">
                    <img   className="ind-content-image-item-1" src={Client5} alt="" />
              </div>
            
            </Slider>
          </div>
          </>
        );
      }
}

export default IndustriesAndClients
