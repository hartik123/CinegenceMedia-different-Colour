import React from 'react'
import Logo from '../videos/new_logo.mp4';

const Home = () => {
    return (
        <div id="home" style={{ textAlign: "center", minHeight: "1vh",margin:"0 4rem 0rem 4rem"}}>
            <video width="100%" height="100%" loop muted autoPlay >
                Your browser does not support the video tag.

                <source src={Logo} type="video/mp4" />
            </video>
        </div>
    )
}

export default Home;
