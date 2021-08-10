import React from 'react'
import './App.css';
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './Responsive.css'
import Header from './Components/Header';
import NavBar from './Components/NavBar';
import WhatWeDo from './Components/WhatWeDo';
import IndustriesAndClients from './Components/IndustriesAndClients';
import OurTeam from './Components/OurTeam';
import LatestBlogs from './Components/LatestBlogs';
import Subscribe from './Components/Subscribe';
import Footer from './Components/Footer';


function App() {
  return (
      <div className="App">
        <NavBar />
        <Header />
        <WhatWeDo />
        <IndustriesAndClients />
        <OurTeam />
        <LatestBlogs />
        <Subscribe />
        <Footer />
      </div>
    );
}

export default App;
