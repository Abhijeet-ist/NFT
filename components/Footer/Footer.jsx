import React from 'react';
import Style from './Footer.module.css';
import Image from 'next/image';
import { TiSocialFacebook, TiSocialLinkedin, TiSocialTwitter, TiSocialYoutube, TiSocialInstagram, TiArrowSortedDown, TiArrowSortedUp } from 'react-icons/ti';
import { RiSendPlaneFill } from 'react-icons/ri';
import images from '../../img';
import { Discover, HelpCenter } from '../NavBar/index';


const Footer = () => {
  return (
    <div className={Style.footer}>
      <div className={Style.footer_box}>
        <div className={Style.footer_box_social}>
          <Image src={images.logo} alt='footer logo' height={100} width={100} />
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis aut, earum doloremque ut, quia praesentium corporis eligendi quam tempore mollitia dolorem expedita eaque nobis error.</p>
          <div className={Style.footer_social}>
            <a href="#">
              <TiSocialFacebook />
            </a>
            <a href="#">
              <TiSocialLinkedin />
            </a>
            <a href="#">
              <TiSocialTwitter />
            </a>
            <a href="#">
              <TiSocialYoutube />
            </a>
            <a href="#">
              <TiSocialInstagram />
            </a>
          </div>
        </div>

        <div className={Style.footer_box_discover}>
          <h3>Discover</h3>
          <Discover />
        </div>

        <div className={Style.footer_box_help}>
          <h3>Help Center</h3>
          <HelpCenter />
        </div>

        <div className={Style.subscribe}>
          <h3>Subscribe</h3>
          <div className={Style.subscribe_box}>
            <input type="email" placeholder='Enter Your email *' />
            <RiSendPlaneFill className={Style.subscribe_box_send} />
          </div>
          <div className={Style.subscribe_box_info}>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem laboriosam atque velit in? Consequatur, magnam.</p>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Footer
