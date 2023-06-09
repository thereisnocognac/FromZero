import React from "react";
import fft from './assets/fftp.png';

export default function MainBanner() {
    return (
        <div className="flex flex-col">
        <img src={fft} alt=""  className=''/>
        <input type="text"  className='bg-white text-black'/>
        </div>
    )
}