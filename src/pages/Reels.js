import React from 'react'
import './Reels.css';
// import ReactPlayer from 'react-player';
import Slider from '../component/Slider';

const Reels = () => {
    return (
        <div id="reels">

            <h1 style={{color: "#fff"}}>
                This is reels
            </h1>
            

            <Slider title={'Latest & Trending VFX'}/>
            <Slider title={'Popular VFX'}/>
            <Slider title={'Popular in Cinegence'}/>

        </div>
    )
}

export default Reels;
