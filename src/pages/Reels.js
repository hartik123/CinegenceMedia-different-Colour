import React, { useEffect } from 'react'
import './Reels.css';
// import ReactPlayer from 'react-player';
import Slider from '../component/Slider';
   

const Reels = () => {
    
    return (
        <div id="reels">

            <h1 style={{ fontSize: "3rem", color: "#fff" }}>
                REELS
            </h1>


            <Slider title={'COMPILATION'} />
            <Slider title={'FILMS'} />
            <Slider title={'TV / COMMERCIALS'} />

        </div>
    )
}

export default Reels;
