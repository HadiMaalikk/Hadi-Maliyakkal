import { Routes, Route } from "react-router-dom";
import Hero from "./pages/Hero";
import Resume from "./pages/Resume";
import Portfolio from "./pages/Portfolio";
import Hobbies from "./pages/Hobbies";
import Contact from "./pages/Contact";
import Certificate from "./pages/Certificate";
import Navbar from "./assets/Navbar"

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/hobbies" element={<Hobbies />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/certificate" element = {<Certificate/>}/>
      </Routes>
    </div>
  );
};

export default App;
