import React, { useState, useEffect } from "react";

import { BrowserRouter as Routes, Route, Link } from "react-router-dom";

const Home = () => {
   const [titleOfPage, setTitleOfPage] = useState("Home decoration");
   const [docTitle, setDocTitle] = useState(`${titleOfPage}`);
   let [counter, setCounter] = useState<number>(0);

   useEffect(() => {
      document.title = docTitle;
   }, [docTitle, counter]);

   return (
      <div>
         <h2>{titleOfPage}</h2>
         <div>
            <img src="/images/homedecor.jpg" height={"300px"} alt=" " />
            <br />
            Home decoration is a wish for many of us. However, at first glance,
            home décor ideas seem very complicated and confusing. But in reality
            it is simple if you do it right. Our fast-paced busy lives often
            deprive us the time to indulge in home decoration. And in many
            cases, maintaining this décor proves to be a big hassle. Add to this
            the exorbitant costs that come with decorating a house, and every
            homemaker feels demotivated from decking up the living spaces. More
            decoration brings more complication in our life compared to joy.
            <br />
            <br />
            Want to change the title of this page? New title{" "}
            <input
               type="text"
               placeholder="changeTitleOfthePage"
               value={titleOfPage}
               onChange={(e) => setTitleOfPage(e.target.value)}
            />
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
            <br />
            <br />
            <Link to="/" type="button" className="btn btn-dark">
               Back
            </Link>
         </div>
      </div>
   );
};

export default Home;
