import React from "react";
import Hero from "./components/hero";
import WhoThisFor from "./components/whoThisFor";
import Expertise from "./components/expertise";
import WhyChooseUs from "./components/whyChooseUs";
import Testimonials from "./components/testimonials";
import Cta from "./components/cta";

const Home = () => {
  return (
    <div>
      <Hero />
      <WhoThisFor />
      <Expertise />
      <WhyChooseUs />
      <Testimonials />
      <Cta />
    </div>
  );
};

export default Home;
