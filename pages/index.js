import React from 'react';
import Style from '../styles/index.module.css';
import { BigNFTSlider, HeroSection, Service } from '../components/componentsindex';

const Home = () => {
  return (
    <div className={Style.homePage}>
      <HeroSection />
      <Service />
      <BigNFTSlider />
    </div>
  )
}

export default Home
