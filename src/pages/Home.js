import React from 'react'
import Logo from '../videos/new_logo.mp4';
import './Home.css'

const Home = () => {
    return (
        <div id="home" class="video-container" >
            <video class="video-parallax" loop muted autoPlay >
                Your browser does not support the video tag.

                <source src={Logo} type="video/mp4" />
            </video>
        </div>
    )
}

export default Home;
// style={{ textAlign: "center", minHeight: "1vh",margin:"0 4rem 0rem 4rem"}}