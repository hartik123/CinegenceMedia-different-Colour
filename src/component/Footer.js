import React from "react";

function Footer() {
  return (
    <>
      <div className="footer" style={{backgroundColor: "#000"}}>
        <p
          style={{
            color: "#1A1934",
            fontWeight: 700,
            marginBottom: 0,
            fontSize: "14px",
            paddingTop: "1rem"
          }}
        >
          <a href style={{ color: "#1A1934" }}>
            FAQ
          </a>{" "}
          |{" "}
          <a href style={{ color: "#1A1934" }}>
            Contact Us
          </a>
        </p>
        <p
          style={{
            color: "rgb(146, 146, 146)",
            fontWeight: 600,
            marginBottom: 0,
            fontSize: "14px",
          }}
        >
          © All copy rights reserved by Edelweiss Asset Management Ltd.
        </p>
        <p
          style={{
            color: "rgb(146, 146, 146)",
            fontWeight: 300,
            fontSize: "12px",
            paddingBottom: "1rem",
            marginBottom: 0
          }}
        >
          Disclaimer: This software/weblink is intended soley for the use of
          distributors of Edelweiss Group. An unauthorized use and dissemination
          of database(s) is strictly prohibited.
        </p>
      </div>
    </>
  );
}

export default Footer;