import React from 'react';
import Style from '../styles/index.module.css';
import { BigNFTSlider, HeroSection, Service, Subscribe } from '../components/componentsindex';

const Home = () => {
  return (
    <div className={Style.homePage}>
      <HeroSection />
      <Service />
      <BigNFTSlider />
      <Subscribe />
    </div>
  )
}

export default Home
