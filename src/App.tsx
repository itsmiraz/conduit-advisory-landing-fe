import Stat from "./pages/home/components/stat";
import Hero from "./pages/home/components/hero";
import Partnership from "./pages/home/components/partnership";
import About from "./pages/home/components/about";
import HowWeWork from "./pages/home/components/howWeWork";
import Contact from "./pages/home/components/contact";
import Team from "./pages/home/components/team";

const App = () => {
  return (
    <div>
      <Hero />
      <Stat />
      <Partnership />
      <About />
      <HowWeWork />
      <Team />
      <Contact />
    </div>
  );
};

export default App;
