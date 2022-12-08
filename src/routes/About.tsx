import React, { useState, useEffect } from "react";
import NextLink from "next/link";
import "./Common.css";
import {
   ChakraProvider,
   Heading,
   Input,
   Button,
   Link,
   IconButton,
   Flex,
   Spacer,
   Text,
} from "@chakra-ui/react";


const About = () => {
   const [showImage, setshowImage] = useState<boolean>(true);
   const [countOrder, setCountOrder] = useState<number>(0);

   useEffect(() => {}, [showImage, setCountOrder]);

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
               <Flex>
                  <Heading as="h3" size="lg">
                     About us
                  </Heading>
                  <Spacer />
                  <Text bg={"goldenrod"}> Number of items in the cart: {countOrder}{' '}</Text>
               </Flex>
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
                  <div style={{ display: "grid", padding: "1rem" }}>
                     {showImage && (
                        <img
                           style={{padding: "0.5rem" }}
                           src="/images/about.jpg"
                           height={"250px"}
                           width={"300px"}
                           alt=" "
                        />
                     )}{" "}
                     <Button
                        colorScheme="facebook"
                        size="sm"
                        onClick={() => {
                           setCountOrder(countOrder + 1);
                        }}
                     >
                        Add to cart
                     </Button>
                  </div>
                  <div style={{ display: "grid", padding: "1rem"}}>
                     {showImage && (
                        <img
                           style={{padding: "0.5rem" }}
                           src="/images/about2.jpeg"
                           height={"250px"}
                           width={"300px"}
                           alt=" "
                        />
                     )}{" "}
                     <Button
                        colorScheme="facebook"
                        size="sm"
                        onClick={() => {
                           setCountOrder(countOrder + 1);
                        }}
                     >
                        Add to cart
                     </Button>
                  </div>
                  <div style={{ display: "grid", padding: "1rem"}}>
                  {showImage && (
                     <img
                        style={{padding: "0.5rem" }}
                        src="/images/about3.jpg"
                        height={"250px"}
                        width={"300px"}
                        alt=" "
                     />
                  )}{" "}
                  <Button
                        colorScheme="facebook"
                        size="sm"
                        onClick={() => {
                           setCountOrder(countOrder + 1);
                        }}
                     >
                        Add to cart
                     </Button>
                  </div>
                  <div style={{ display: "grid", padding: "1rem" }}>
                  {showImage && (
                     <img
                        style={{padding: "0.5rem" }}
                        src="/images/about4.jpg"
                        height={"250px"}
                        width={"300px"}
                        alt=" "
                     />
                  )}
                  <Button
                        colorScheme="facebook"
                        size="sm"
                        onClick={() => {
                           setCountOrder(countOrder + 1);
                        }}
                     >
                        Add to cart
                     </Button>
                  </div>
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
