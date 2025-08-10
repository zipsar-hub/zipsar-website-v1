import Footer from "./Components/Common/Footer";
import Navbar from "./Components/Common/Navbar";
import About from "./Sections/About";
import Contact from "./Sections/Contact";
import Hero from "./Sections/Hero";
import Service from "./Sections/Service";

const App = () => {
  return (
    <div className="w-full bg-black text-white">
      <Navbar />
      <Hero />
      <Service />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
