/**
 * Application component
 *
 * To contain application wide settings, routes, state, etc.
 */

import React from "react";

import About from "./Components/About";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Portfolio from "./Components/Portfolio";
import "./styles.css";
import Education from "./Components/Education";
import Home from "./Components/Home";


const App = () => {
  return (
    <div id="main">
      <Header />
      <Home/>
      <Education/>
      <About />
      <Portfolio />
      <Footer />
    </div>
  );
};

export default App;
