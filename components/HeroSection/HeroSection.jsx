import React from 'react';
import Style from './HeroSection.module.css';
import Image from 'next/image';
import {Button} from '../componentsindex';
import images from '../../img';

const HeroSection = () => {
  return (
    <div className={Style.heroSection}>
      <div className={Style.heroSection_box}>
        <div className={Style.heroSection_box_left}>
          <h1>Discover, collect, and sell NFTs </h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, enim!</p>
          <Button btnName='Start your Search'/>
        </div>

        <div className={Style.heroSection_box_right}>
          <Image src={images.hero} alt='Hero Section' width={600} height={600} />
        </div>
      </div>
    </div>
  )
}

export default HeroSection
