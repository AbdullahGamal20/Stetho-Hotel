import React from "react";
import Hero from "../HomeSection/Hero";
import HomeAbout from "../HomeSection/HomeAbout";
import DestinationHome from "../HomeSection/DestinationHome/DestinationHome";
import MostPopular from "../HomeSection/Popular/MostPopular";
import Download from "../HomeSection/Download/Download";
import Works from "../HomeSection/Works/Works";
import Gallery from "../HomeSection/Gallery/Gallery";

function Home() {
  return (
    <>
      <Hero />
      <HomeAbout />
      <MostPopular />
      <DestinationHome />
      <Download />
      <Works />
      <Gallery />
    </>
  );
}

export default Home;
