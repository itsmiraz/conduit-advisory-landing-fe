import React from "react";
import Stat from "./pages/home/components/stat";
import Hero from "./pages/home/components/hero";
import Partnership from "./pages/home/components/partnership";
import About from "./pages/home/components/about";
import HowWeWork from "./pages/home/components/howWeWork";
import OurTeam from "./pages/home/components/OurTeam";
import Contact from "./pages/home/components/contact";

const App = () => {
  return (
    <div>
      <Hero />
      <Stat />
      <Partnership />
      <About />
      <HowWeWork />

      <OurTeam />
      <Contact />
    </div>
  );
};

export default App;
