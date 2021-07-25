import React from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';


const Navbar = ({ data }) => {
    return (
        <div style={{ zIndex: 1, position: "fixed" }}>
            
            <ul className="nav-items" style={{ display: "flex", flexDirection: "column", boxSizing: "border-box",width: "15vw", height: "90vh",margin:"1rem", paddingTop: "1rem", backgroundColor: "white", borderRadius: "1rem", boxShadow:"6px 6px 1rem grey" , textAlign: "center"}}>
                <Link
                class="link"
                    activeClass="active"
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                    exact
                    style={{ margin: "1rem", cursor: "pointer"}}
                    onClick={() => data.setOpen(false)}
                    >Home</Link>
                <Link
                 class="link"
                    activeClass="active"
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                    exact
                    style={{ margin: "1rem", cursor: "pointer"}}
                    onClick={() => data.setOpen(false)}
                >About</Link>
                <Link
                 class="link"
                    activeClass="active"
                    to="reels"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                    exact
                    style={{ margin: "1rem", cursor: "pointer"}}
                    onClick={() => data.setOpen(false)}
                >Reels</Link>
                <Link
                 class="link"
                    activeClass="active"
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                    exact
                    style={{ margin: "1rem", cursor: "pointer"}}
                    onClick={() => data.setOpen(false)}
                >Services</Link>
                <Link
                 class="link"
                    activeClass="active"
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                    exact
                    style={{ margin: "1rem", cursor: "pointer"}}
                    onClick={() => data.setOpen(false)}
                >Connect</Link>
            </ul>

        </div>
    )
}

export default Navbar
