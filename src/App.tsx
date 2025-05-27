import About from "./components/About";
import Container from "./components/Container";
import Experience from "./components/Experience";
import FeaturedProjects from "./components/FeaturedProjects";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import TechnicalSkills from "./components/TechnicalSkills";

function App() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="flex flex-1 sticky top-0">
        <Sidebar />
        <div className="pl-64 w-full">
          <Container>
            <About />
            <TechnicalSkills />
            <Experience />
            <FeaturedProjects />
            <div className="margin" id="certifications"></div>
          </Container>
        </div>
      </div>
    </div>
  );
}

export default App;
