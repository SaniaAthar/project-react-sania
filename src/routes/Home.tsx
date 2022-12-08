import React, { useState, useEffect } from "react";
import "./Common.css";
import { BrowserRouter as Routes, Route } from "react-router-dom";
import NextLink from 'next/link';
import {
   ChakraProvider,
   Heading,
   Input,
   Button,
   Link,
} from "@chakra-ui/react";


interface Ihome {
   homeTitle: string;
   backgroundColor: string;
}

const Home = (props: Ihome) => {
   const [titleOfPage, setTitleOfPage] = useState(props.homeTitle);
   const [docTitle, setDocTitle] = useState(`${titleOfPage}`);
   let [counter, setCounter] = useState<number>(0);

   useEffect(() => {
      document.title = docTitle;
   }, [docTitle, counter]);

   return (
      <ChakraProvider>
         <div>
            <nav
               style={{
                  borderBottom: "solid 1px",
                  paddingBottom: "1rem",
                  fontSize: "20pt",
                  background: props.backgroundColor,
               }}
            >
               <Link as={NextLink} href='/home'>Home</Link>
               {"  "}
               <Link as={NextLink} href='/about'>About</Link>
               {"  "}
               <Link as={NextLink} href='/user'>User</Link>
            </nav>
            <div className="Common">
            <br />
            <Heading as="h3" size="lg">
               {titleOfPage}
            </Heading>
            <br />
            Want to change the title of this page? New title{" "}
            <Input
               type="text"
               placeholder="changeTitleOfthePage"
               size="sm"
               width="300px"
               color="teal"
               focusBorderColor="pink.400"
               value={titleOfPage}
               onChange={(e) => setTitleOfPage(e.target.value)}
            />
            <br />
            <br />
            <div>
               <img
                  src="/images/homedecor.jpg"
                  height={"300px"}
                  width={"600px"}
                  alt=" "
               />
               <br />
               <p style={{ width: "900px", textAlign: "justify" }}>
                  Home decoration is a wish for many of us. However, at first
                  glance, home décor ideas seem very complicated and confusing.
                  But in reality it is simple if you do it right. Our fast-paced
                  busy lives often deprive us the time to indulge in home
                  decoration. And in many cases, maintaining this décor proves
                  to be a big hassle. Add to this the exorbitant costs that come
                  with decorating a house, and every homemaker feels demotivated
                  from decking up the living spaces. More decoration brings more
                  complication in our life compared to joy.
                  <br />
                  <br />
                  Today, we all seek simplicity. Be it simplicity in design,
                  functionality, or the merely the process. The minimalist and
                  simplistic chain of thought has us trying to simplify every
                  situation. And we are here to give you ideas for the same.
                  From small color changes to rearranging your furniture, we aim
                  to help you transform your space without racking your brain
                  over it. And guess what? You don't have to pay an arm and leg
                  for it. So don't sweat!
                  <br />
                  <br />
                  We feel your décor woes, so we want to make your life easier.
                  We have put together some cost-effective and creative ways to
                  transform your living space. Through the help of some simple
                  home décor ideas, your dream living space is now a reality.
               </p>
               <br />
               <br />
               Want to change the document title to this page title? {"  "}
               <Button
                  colorScheme="teal"
                  size="sm"
                  onClick={() => {
                     setDocTitle(`Hi ${titleOfPage}`);
                     setCounter(counter + 1);
                  }}
               >
                  Enter
               </Button>
               <br />
               <p>
                  You have change the document title{" "}
                  <p
                     style={{
                        display: "inline",
                        fontSize: "15pt",
                        color: "red",
                     }}
                  >
                     {counter}
                  </p>{" "}
                  times{" "}
               </p>
               <br />
               <Seat backgroundColor="blue" />
               <br />
               <Link as={NextLink} href='/' type="Button" style={{color: "#D53F8C", fontSize: "18pt"}}>
                  Back
               </Link>
            </div>
            </div>
         </div>
      </ChakraProvider>
   );
};

interface Iseat {
   backgroundColor: string;
}

const Seat = (props: Iseat) => {
   return (
      <p style={{ color: props.backgroundColor, background:"gray", width: "900px"}}>This is a child element.</p>
   );
};

export default Home;
