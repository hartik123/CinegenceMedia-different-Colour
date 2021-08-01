import React from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';
import cine from '../images/cine.JPG';


const Navbar = ({ data }) => {
    return (
        <div style={{ zIndex: 1, position: "fixed", display: "flex", flexDirection: "column", boxSizing: "border-box",width: "100vw", height: "40vh",paddingTop: "1rem", backgroundColor: "white", borderRadius: "0rem 0rem 1rem 1rem", boxShadow:"6px 6px 1rem grey" }}>
            
            {/* <ul className="nav-items" style={{ display: "flex", flexDirection: "column", boxSizing: "border-box",width: "15vw", height: "90vh",margin:"1rem", paddingTop: "1rem", backgroundColor: "white", borderRadius: "1rem", boxShadow:"6px 6px 1rem grey" , textAlign: "center"}}> */}
                <Link
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                exact
                style={{width: "100vw", cursor: "pointer", display: "flex", justifyContent: "center", alignItems: "center"}}
                onClick={() => data.setOpen(false)} >

                <img src={cine} width= "30px" height= "30px"/> 
                <span style={{fontSize: "2rem", fontWeight: "bold", marginLeft: "1rem"}}>CINEGENCE MEDIA</span> 

                </Link>
                <center>
                <Link
                    activeClass="active"
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                    exact
                    style={{width: "100vw", cursor: "pointer"}}
                    onClick={() => data.setOpen(false)}
                    ><p className= "navtext">Home</p></Link>
                </center>
                <center>
                <Link
                    activeClass="active"
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                    exact
                    style={{width: "100vw", cursor: "pointer"}}
                    onClick={() => data.setOpen(false)}
                ><p className= "navtext">About</p></Link>
                </center>
                <center>
                <Link
                    activeClass="active"
                    to="reels"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                    exact
                    style={{width: "100vw", cursor: "pointer"}}
                    onClick={() => data.setOpen(false)}
                ><p className= "navtext">Reels</p></Link>
                </center>
                <center>
                <Link
                    activeClass="active"
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                    exact
                    style={{ width: "100vw", cursor: "pointer"}}
                    onClick={() => data.setOpen(false)}
                ><p className= "navtext">Services</p></Link>
                </center>
                <center>
                <Link
                    activeClass="active"
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                    exact
                    style={{  cursor: "pointer"}}
                    onClick={() => data.setOpen(false)}
                ><p className= "navtext">Connect</p></Link>
                </center>
            {/* </ul> */}

        </div>
    )
}

export default Navbar
