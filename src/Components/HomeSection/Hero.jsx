import React from "react";
import Slide from "./Slide";
import Data from "./Data";
import "./home.css";

function Hero() {
  return (
    <>
      <Slide slides={Data} />
    </>
  );
}

export default Hero;
