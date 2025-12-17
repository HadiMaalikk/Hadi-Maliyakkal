import { Routes, Route } from "react-router-dom";
import Resume from "./pages/Resume";
import Portfolio from "./pages/Portfolio";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Certificate from "./pages/Certificate";
import Navbar from "./assets/Navbar";
import HeroWithLoading from "./pages/HeroWithLoading";
import ScrollTop from './components/ScrollToTop'

const App = () => {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <ScrollTop/>
      <Routes>
        <Route path="/" element={<HeroWithLoading/>} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/certificate" element={<Certificate />} />
      </Routes>
      
    </div>
  );
};

export default App;
