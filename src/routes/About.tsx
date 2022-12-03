import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";

const About = () => {
   const [showImage, setshowImage] = useState<boolean>(true);

   useEffect(() => {}, [showImage]);

   return (
      <div>
         <nav
            style={{
               borderBottom: "solid 1px",
               paddingBottom: "1rem",
               fontSize: "20pt",
               background: "grey",
            }}
         >
            <Link to="/home">Home</Link>
            {"  "}
            <Link to="/about">About</Link>
            {"  "}
            <Link to="/user">User</Link>
         </nav>
         <h2>About us</h2>
         <p style={{ width: "1100px", textAlign: "justify" }}>
            Welcome to home decoration, your number one partner for all things
            from change of color to full decoration package. We are dedicated to
            provide you the very best of services, with a focus on simplicity
            yet elegant, stylish yet affordable, and without complication.
         </p>
         {showImage && <img src="/images/about.jpg" height={"300px"} alt=" " />}{" "}
         {showImage && (
            <img src="/images/about2.jpeg" height={"300px"} alt=" " />
         )}{" "}
         {showImage && (
            <img src="/images/about3.jpg" height={"300px"} alt=" " />
         )}{" "}
         {showImage && (
            <img src="/images/about4.jpg" height={"300px"} alt=" " />
         )}
         <br />
         <br />
         <button
            onClick={() => {
               setshowImage(!showImage);
            }}
         >
            Show hide image
         </button>
         <br />
         <br />
         <Link to="/" type="button" className="btn btn-dark">
            Back
         </Link>
      </div>
   );
};

export default About;
