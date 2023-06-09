import React from "react";
import fft from './assets/fftp.png';

export default function MainBanner() {
    return (
        <div>
        <img src={fft} alt=""  className='mt-auto'/>
        <input type="text"  className='bg-white text-black'/>
        </div>
    )
}