import React from "react";
import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";

import { Link } from "react-router-dom";

function App() {
   return (
      <ChakraProvider>
         <div className="App">
            <nav
               style={{
                  borderBottom: "solid 1px",
                  paddingBottom: "1rem",
                  fontSize: "20pt",
               }}
            >
               <Link to="/home">Home</Link>
               {"  "}
               <Link to="/about">About</Link>
               {"  "}
               <Link to="/user">User</Link>
            </nav>

            <header className="App-header">
               <p>
                  Edit <code>src/App.tsx</code> and save to reload.
               </p>
               <a
                  className="App-link"
                  href="https://reactjs.org"
                  target="_blank"
                  rel="noopener noreferrer"
               >
                  Learn React
               </a>
            </header>
         </div>
      </ChakraProvider>
   );
}

export default App;
