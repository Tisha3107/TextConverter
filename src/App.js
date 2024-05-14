import "./App.css";
import React, { useState } from "react";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Navbar title="TisHa-Coder" aboutType="ABOUT" />

      <div className="container my-3">
        <Textform heading="Enter the Text to Analyze below" />
      </div>
      <About />
      <Contact />
    </>
  );
}

export default App;
