import React from "react";
import Navbar from "./Navbar";
import { BrowserRouter } from "react-router-dom";
import Hero from "./Hero";
import About from "./About";
import Experience from "./Experience";
import Tech from "./Tech";
import Works from "./Works";
import Contact from "./Contact";
import StarsCanvas  from "../components/canvas/StarCanvas";

function Main() {
  return (
    <BrowserRouter>
      <div className="relative z-0  border-3">
        <div className="bg-new-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <div className="bg-new-pattern  bg-repeat-y bg-center">
        <About />
        <Experience />
        <Tech />
        <Works /></div>
        <div className="relative z-0">
          <Contact />
          <StarsCanvas/>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default Main;
