import React from 'react'
import './App.css';
import './Responsive.css'
import Header from './Components/Header';
import NavBar from './Components/NavBar';
import WhatWeDo from './Components/WhatWeDo';
import IndustriesAndClients from './Components/IndustriesAndClients';
import OurTeam from './Components/OurTeam';

function App() {
  return (
      <div className="App">
        <NavBar />
        <Header />
        <WhatWeDo />
        <IndustriesAndClients />
        <OurTeam />
      </div>
    );
}

export default App;
