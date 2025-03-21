import React from 'react';
import Style from '../styles/index.module.css';
import { BigNFTSlider, FollowerTab, HeroSection, Service, Subscribe } from '../components/componentsindex';

const Home = () => {
  return (
    <div className={Style.homePage}>
      <HeroSection />
      <Service />
      <BigNFTSlider />
      <Subscribe />
      <FollowerTab/>
    </div>
  )
}

export default Home
