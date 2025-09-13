import React from "react";
import Stat from "./pages/home/components/stat";
import Hero from "./pages/home/components/hero";
import Partnership from "./pages/home/components/partnership";
import About from "./pages/home/components/about";

const App = () => {
  return (
    <div>
      <Hero />
      <Stat />
      <Partnership />
      <About />
    </div>
  );
};

export default App;
