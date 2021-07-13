import React from 'react';
import { Link } from 'react-scroll';


const Navbar = ({ data }) => {
    return (
        <div style={{ zIndex: 1, position: "fixed" }}>
            {/* <ul className="nav-items" style={{ display: "flex", flexDirection: "column", margin: "0.7rem",width: "15vw", height: "47vh",paddingTop: "1rem", backgroundColor: "white", borderRadius: "1rem", boxShadow:"6px 6px 1rem grey" }}> */}
            <ul className="nav-items" style={{ display: "flex", flexDirection: "column", margin: "0.7rem",width: "15vw", height: "95vh",paddingTop: "1rem", backgroundColor: "white", borderRadius: "1rem", boxShadow:"6px 6px 1rem grey" }}>
                <Link
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
                    activeClass="active"
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                    exact
                    style={{ margin: "1rem", cursor: "pointer"}}
                    onClick={() => data.setOpen(false)}
                >Contact</Link>
            </ul>

        </div>
    )
}

export default Navbar
