import React, { useState, useEffect } from "react";
import NextLink from "next/link";
import "./Common.css";
import { ChakraProvider, Heading, Input, Button, Link } from "@chakra-ui/react";

const About = () => {
   const [showImage, setshowImage] = useState<boolean>(true);

   useEffect(() => {}, [showImage]);

   return (
      <ChakraProvider>
         <div>
            <nav
               style={{
                  borderBottom: "solid 1px",
                  paddingBottom: "1rem",
                  fontSize: "20pt",
                  background: "grey",
               }}
            >
               <Link as={NextLink} href="/home">
                  Home
               </Link>
               {"  "}
               <Link as={NextLink} href="/about">
                  About
               </Link>
               {"  "}
               <Link as={NextLink} href="/user">
                  User
               </Link>
            </nav>

            <div className="Common">
               <Heading as="h3" size="md">
                  About us
               </Heading>
               <br />
               <p style={{ width: "1100px", textAlign: "justify" }}>
                  Welcome to home decoration, your number one partner for all
                  things from change of color to full decoration package. We are
                  dedicated to provide you the very best of services, with a
                  focus on simplicity yet elegant, stylish yet affordable, and
                  without complication.
               </p>
               <br />
               <div style={{ display: "flex", padding: "1rem" }}>
                  {showImage && (
                     <img
                        style={{ padding: "0.5rem" }}
                        src="/images/about.jpg"
                        height={"200px"}
                        width={"300px"}
                        alt=" "
                     />
                  )}{" "}
                  {showImage && (
                     <img
                        style={{ padding: "0.5rem" }}
                        src="/images/about2.jpeg"
                        height={"200px"}
                        width={"300px"}
                        alt=" "
                     />
                  )}{" "}
                  {showImage && (
                     <img
                        style={{ padding: "0.5rem" }}
                        src="/images/about3.jpg"
                        height={"200px"}
                        width={"300px"}
                        alt=" "
                     />
                  )}{" "}
                  {showImage && (
                     <img
                        style={{ padding: "0.5rem" }}
                        src="/images/about4.jpg"
                        height={"200px"}
                        width={"300px"}
                        alt=" "
                     />
                  )}
               </div>
               <Button
                  colorScheme="facebook"
                  size="sm"
                  onClick={() => {
                     setshowImage(!showImage);
                  }}
               >
                  Show and hide image
               </Button>
               <br />
               <br />
               <Link
                  as={NextLink}
                  href="/"
                  type="Button"
                  style={{ color: "#D53F8C", fontSize: "18pt" }}
               >
                  Back
               </Link>
            </div>
         </div>
      </ChakraProvider>
   );
};

export default About;
