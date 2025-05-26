import Container from "./components/Container";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="flex flex-1 sticky top-0">
        <Sidebar />
        <div className="pl-64 w-full">
          <Container>
            <h1>Shayan</h1>
          </Container>
        </div>
      </div>
    </div>
  );
}

export default App;
