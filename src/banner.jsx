import React from "react";
import fft from './assets/fftp.png';

export default function MainBanner() {
    return (
        <div className="flex flex-col">
        <img src={fft} alt=""  className='block w-[70%] ml-auto mr-auto'/>
        <input type="text"  className='bg-white text-black block w-[80%] ml-auto mr-auto'/>
        </div>
    )
}