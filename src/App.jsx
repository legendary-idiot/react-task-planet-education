import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <header className="max-w-[1536px] mx-auto">
        <Navbar></Navbar>
        <HeroSection />
      </header>
      <main>
        <Home />
      </main>
      <footer>
        <h1>Footer Section</h1>
      </footer>
    </>
  );
}

export default App;
