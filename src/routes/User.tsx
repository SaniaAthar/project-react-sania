import React, { useState, useEffect } from "react";
import "./Common.css";
import { ChakraProvider, Heading, Input, Button, Link } from "@chakra-ui/react";
import NextLink from "next/link";

const User = () => {
   const [userComment, setUserComment] = useState(
      "Write your feed back or comment"
   );

   const [showComment, setShowComment] = useState(false);

   const [userCommentCollection, setUserCommentCollection] =
      useState<string>("");

   const [showAdress, setShowAdress] = useState(false);

   useEffect(() => {}, [showComment, showAdress]);

   return (
      <ChakraProvider>
         <div>
            <nav
               style={{
                  borderBottom: "solid 1px",
                  paddingBottom: "1rem",
                  fontSize: "20pt",
                  background: "pink",
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
               <Heading as="h3" size="lg">
                  Users
               </Heading>
               <br />
               <p style={{ width: "1100px", textAlign: "justify" }}>
                  In case of any issues with our products, please contact us
                  support@homedecor.com with the product details. To arrange a
                  free no obligation quotation or to discuss your project please
                  contact quotation@homedecor.com. we aim to respond to your
                  enquiry within 24 hours.
               </p>
               <br />
               <Button
                  colorScheme="facebook"
                  size="sm"
                  onClick={() => {
                     setShowAdress(!showAdress);
                  }}
               >
                  Show and hide address
               </Button>

               {showAdress && (
                  <div>
                     {" "}
                     <h4>Your homedeco solution</h4>
                     <p>Emmylundsvagen 3 Solna</p> <p>SE-10023 Stockholm</p>{" "}
                  </div>
               )}
               <br />
               <br />
               <p style={{ width: "1100px", textAlign: "justify" }}>
                  Your feedback is valuable to us. It helps greatly in improving
                  our product and services. For any suggestion and comments,
                  please write to us{" "}
                  <a href="mailto:info@gcm-decor.co.uk">
                     feedback@homedecor.com.
                  </a>{" "}
                  or directly write on this page below
               </p>
               <br />
               <Heading as="h5" size="sm">
                  Feedback and comments:
               </Heading>
               <Input
                  style={{textAlign: "start", height: "100px", width: "400px" }}
                  type="text"
                  color="teal"
                  focusBorderColor="pink.400"
                  placeholder="changeTitleOfthePage"
                  value={userComment}
                  onChange={(e) => setUserComment(e.target.value)}
               />
               <br />
               <br />
               <Button
               colorScheme="teal"
               size="sm"
                  onClick={() => {
                     setShowComment(true);
                     setUserCommentCollection(
                        userCommentCollection + userComment + "<tbr>"
                     );
                  }}
               >
                  Add comment
               </Button>
               {showComment && (
                  <p>
                     {userCommentCollection
                        .split("<tbr>")
                        .map((arrayItem, index) => {
                           const myString =
                              `${index + 1}. ` + arrayItem.toString();
                           return <p>{myString}</p>;
                        })}
                  </p>
               )}

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

export default User;
