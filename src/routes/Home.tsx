import React, { useState, useEffect } from "react";

import { BrowserRouter as Routes, Route, Link } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";

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
            <Link to="/home">Home</Link>
            {"  "}
            <Link to="/about">About</Link>
            {"  "}
            <Link to="/user">User</Link>
         </nav>
         <h2>{titleOfPage}</h2>
         Want to change the title of this page? New title{" "}
         <input
            type="text"
            placeholder="changeTitleOfthePage"
            value={titleOfPage}
            onChange={(e) => setTitleOfPage(e.target.value)}
         />
         <br />
         <br />
         <div>
            <img src="/images/homedecor.jpg" height={"300px"} alt=" " />
            <br />
            <p style={{ width: "900px", textAlign: "justify" }}>
               Home decoration is a wish for many of us. However, at first
               glance, home décor ideas seem very complicated and confusing. But
               in reality it is simple if you do it right. Our fast-paced busy
               lives often deprive us the time to indulge in home decoration.
               And in many cases, maintaining this décor proves to be a big
               hassle. Add to this the exorbitant costs that come with
               decorating a house, and every homemaker feels demotivated from
               decking up the living spaces. More decoration brings more
               complication in our life compared to joy.
               <br />
               <br />
               Today, we all seek simplicity. Be it simplicity in design,
               functionality, or the merely the process. The minimalist and
               simplistic chain of thought has us trying to simplify every
               situation. And we are here to give you ideas for the same. From
               small color changes to rearranging your furniture, we aim to help
               you transform your space without racking your brain over it. And
               guess what? You don't have to pay an arm and leg for it. So don't
               sweat!
               <br />
               <br />
               We feel your décor woes, so we want to make your life easier. We
               have put together some cost-effective and creative ways to
               transform your living space. Through the help of some simple home
               décor ideas, your dream living space is now a reality.
            </p>
            <br />
            <br />
            Want to change the document title to this page title?
            <button
               onClick={() => {
                  setDocTitle(`Hi ${titleOfPage}`);
                  setCounter(counter + 1);
               }}
            >
               Enter
            </button>
            <br />
            <br />
            <p>You have change the document title {counter} times </p>
            <Seat backgroundColor="red" />
            <Link to="/" type="button" className="btn btn-dark">
               Back
            </Link>
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
      <h3 style={{ color: props.backgroundColor }}>This is a child element.</h3>
   );
};

export default Home;
