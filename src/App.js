import React, { useState } from 'react'
// import Test from './Test';
import { Link, animateScroll as scroll } from "react-scroll";
import Home from './pages/Home'
import About from './pages/About'
import Reels from './pages/Reels'
import Contact from './pages/Contact';
import Services from './pages/Services';
import Navbar from './component/Navbar';
import HamburgerMenu from 'react-hamburger-menu';
import Footer from './component/Footer';


const App = () => {
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(prevState => !prevState)

    }
    return (
        <div>
            <div style={{ margin: "1.2rem", zIndex: 2, position: "fixed", cursor: "pointer", height: "auto" }}>
                <HamburgerMenu
                    isOpen={open}
                    menuClicked={handleClick}
                    width={27}
                    height={22}

                    strokeWidth={4}
                    rotate={0}
                    color='#a85c47'
                    borderRadius={16}
                    animationDuration={0.5}
                // style={{ margin: "10rem" ,position: "fixed"}}
                />
            </div>
            {console.log(open)}

            {open && <Navbar data={{ open, setOpen }} />}
            <Home
                id="home" />
            <About
                id="about" />
            <Reels
                id="reels" />
            <Services
                id="services" />
            <Contact
                id="contact" />
            <center>
                <Footer />
            </center>
        </div>
    )
}

export default App
