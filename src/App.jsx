import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <header className="max-w-[1536px] mx-auto">
        <Navbar></Navbar>
        <HeroSection />
      </header>
      <main>
        <h1>Main Content Section</h1>
      </main>
      <footer>
        <h1>Footer Section</h1>
      </footer>
    </>
  );
}

export default App;
