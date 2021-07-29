import React from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';


const Navbar = ({ data }) => {
    return (
        <div style={{ zIndex: 1, position: "fixed", display: "flex", flexDirection: "column", boxSizing: "border-box",width: "100vw", height: "40vh",paddingTop: "1rem", backgroundColor: "white", borderRadius: "0rem 0rem 1rem 1rem", boxShadow:"6px 6px 1rem grey" }}>
            
            {/* <ul className="nav-items" style={{ display: "flex", flexDirection: "column", boxSizing: "border-box",width: "15vw", height: "90vh",margin:"1rem", paddingTop: "1rem", backgroundColor: "white", borderRadius: "1rem", boxShadow:"6px 6px 1rem grey" , textAlign: "center"}}> */}
                <center>
                <Link
                class="link"
                    activeClass="active"
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                    exact
                    style={{width: "100vw", cursor: "pointer"}}
                    onClick={() => data.setOpen(false)}
                    >Home</Link>
                </center>
                <center>
                <Link
                 class="link"
                    activeClass="active"
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                    exact
                    style={{width: "100vw", cursor: "pointer"}}
                    onClick={() => data.setOpen(false)}
                >About</Link>
                </center>
                <center>
                <Link
                 class="link"
                    activeClass="active"
                    to="reels"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                    exact
                    style={{width: "100vw", cursor: "pointer"}}
                    onClick={() => data.setOpen(false)}
                >Reels</Link>
                </center>
                <center>
                <Link
                 class="link"
                    activeClass="active"
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                    exact
                    style={{ width: "100vw", cursor: "pointer"}}
                    onClick={() => data.setOpen(false)}
                >Services</Link>
                </center>
                <center>
                <Link
                 class="link"
                    activeClass="active"
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                    exact
                    style={{  cursor: "pointer"}}
                    onClick={() => data.setOpen(false)}
                >Connect</Link>
                </center>
            {/* </ul> */}

        </div>
    )
}

export default Navbar
