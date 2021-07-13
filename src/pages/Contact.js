import React from 'react';

const Contact = () => {
    const contactStyle = {
        display: "inline-flex",
        flexDirection: "row",
        justifyContent: "center",
        backgroundImage: "url('https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        width: "100%",
        minHeight: "100vh"
    }
    return (
        <div id="contact" style={contactStyle}>
            <div style={{ margin: "5rem", display: "inline", width: "auto", height: "auto" }}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.4523260589867!2d72.86281901490716!3d19.21910885245276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b732f361dc25%3A0xdb427764a8b4c9d9!2sBlue%20Rose%20Ind.%20P.C.S%20Ltd!5e0!3m2!1sen!2sin!4v1625567379906!5m2!1sen!2sin" width="600" height="450" style={{ border: 0 }} allowfullscreen="" loading="lazy" title="googlemap"></iframe>
                <h6 style={{ width: "600", margin: "1rem 12rem", color: "white" }}>Now Open in Google maps</h6>
            </div>
            <div style={{ backgroundColor: "rgb(54, 7, 7)", width: "600px", margin: "5rem" }}>
                <h1 style={{ textAlign: "center", color: "white", paddingTop: "2rem" }}>Contact Us</h1>
                <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", marginTop: "5rem" }}>
                    <div ><center>
                        <span style={{ color: "white", fontWeight: "bold", margin: "1rem" }}>BUSINESS ENQUIRY</span><br />

                        <a href="mailto:business@cinegencemedia.com" style={{ fontSize: "1.2rem", fontWeight: "600", color: "#f20707", opacity: "0.7", margin: "1rem" }}>business@cinegencemedia.com
                        </a>  </center>              </div>
                    <div>
                        <center>
                            <span style={{ color: "white", fontWeight: "bold", margin: "1rem" }}> WORK WITH US</span><br />

                            <a href="mailto:work@cinegencemedia.com" style={{ fontSize: "1.2rem", fontWeight: "600", color: "#f20707", opacity: "0.7", margin: "1rem" }}>work@cinegencemedia.com
                            </a></center>                  </div>
                    <div>
                        <center>
                            <span style={{ color: "white", fontWeight: "bold", margin: "1rem" }}>PRESS ENQUIRY</span><br />

                            <a href="mailto:press@cinegencemedia.com" style={{ fontSize: "1.2rem", fontWeight: "600", color: "#f20707", opacity: "0.7", margin: "1rem" }}>press@cinegencemedia.com
                            </a></center>                  </div>
                    <div>
                        <center>
                            <span style={{ color: "white", fontWeight: "bold", margin: "1rem" }}>CREATIVE ENQUIRY</span><br />

                            <a href="mailto:creative@cinegencemedia.com" style={{ fontSize: "1.2rem", fontWeight: "600", color: "#f20707", opacity: "0.7", margin: "1rem" }}>creative@cinegencemedia.com
                            </a></center>  </div>

                    <div>
                        <center>
                            <span style={{ color: "white", fontWeight: "bold", margin: "1rem" }}>MARKETING</span> <br />
                            <a href="mailto:creative@cinegencemedia.com" style={{ fontSize: "1.2rem", fontWeight: "600", color: "#f20707", opacity: "0.7", margin: "1rem" }}>creative@cinegencemedia.com
                            </a></center>    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;