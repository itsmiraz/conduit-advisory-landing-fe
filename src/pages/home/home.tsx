import React from "react";
import Hero from "./components/hero";
import WhoThisFor from "./components/whoThisFor";
import Expertise from "./components/expertise";
import WhyChooseUs from "./components/whyChooseUs";

const Home = () => {
  return (
    <div>
      <Hero />
      <WhoThisFor />
      <Expertise />
      <WhyChooseUs />
    </div>
  );
};

export default Home;
