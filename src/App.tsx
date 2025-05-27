import Home from "./components/Home";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Container from "./components/Container";
import Experience from "./components/Experience";
import FeaturedProjects from "./components/FeaturedProjects";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import SoftSkills from "./components/SoftSkills";
import TechnicalSkills from "./components/TechnicalSkills";

function App() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar />
        <div className="pl-64 w-full">
          <Container>
            <Home />
            <TechnicalSkills />
            <Experience />
            <FeaturedProjects />
            <Certifications />
            <SoftSkills />
            <Contact />
          </Container>
        </div>
      </div>
    </div>
  );
}

export default App;
