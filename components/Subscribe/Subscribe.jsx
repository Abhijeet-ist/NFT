import React from 'react';
import { RiSendPlaneFill } from 'react-icons/ri';
import Image from 'next/image';
import Style from './Subscribe.module.css';
import images from '../../img';


const Subscribe = () => {
    return (
        <div className={Style.subscribe}>
            <div className={Style.subscribe_box}>
                <div className={Style.subscribe_box_left}>
                    <h2>Never miss a drop</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore voluptate velit eius illo architecto sed accusamus earum recusandae asperiores modi.</p>
                    <div className={Style.subscribe_box_left_box}>
                        <span>01</span>
                        <small>Get more discount</small>
                    </div>
                    <div className={Style.subscribe_box_left_box}>
                        <span>02</span>
                        <small>Get Premium discount</small>
                    </div>
                    <div className={Style.subscribe_box_left_input}>
                        <input type="email" placeholder='Enter your Email' />
                        <RiSendPlaneFill className={Style.subscribe_box_left_input_icon} />
                    </div>
                </div>
                <div className={Style.subscribe_box_right}>
                    <Image src={images.update} alt='get Update' height={600} width={800}/>
                </div>
            </div>
        </div>
    )
}

export default Subscribe
