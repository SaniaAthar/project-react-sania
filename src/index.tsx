import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./routes/Home";
import About from "./routes/About";
import User from "./routes/User";

const root = ReactDOM.createRoot(
   document.getElementById("root") as HTMLElement
);
root.render(
   <BrowserRouter>
      <Routes>
         <Route path="/" element={<App />} />

         <Route path="home" element={<Home homeTitle="Home Deco" backgroundColor="#0BC5EA"/>} />
         <Route path="about" element={<About />} />
         <Route path="user" element={<User />} />
      </Routes>
   </BrowserRouter>
);
