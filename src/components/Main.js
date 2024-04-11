import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import About from "./About";
import { Route, Routes } from "react-router-dom";
import Footer from "./Footer";
import Skills from "./Skills";
import Resume from "./Resume";
import Contact from "./Contact";
// import cyPdf from "../pdf/JamesDuraiS.cyPdf";

const Main = () => {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Header />}>
          <Route index element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path ="/skills" element ={<Skills />} />
          <Route path="/resume" element ={<Resume/>} />
          <Route path="/contact" element ={<Contact/>} />
          {/* <Route path="/cv" element={cyPdf} /> */}
          
        </Route>
      </Routes>
      <Footer />
    </div>
  );
};

export default Main;
