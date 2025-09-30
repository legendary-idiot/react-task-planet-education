import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <header className="max-w-[1536px] mx-auto">
        <Navbar></Navbar>
        <HeroSection />
      </header>
      <main className="max-w-[1536px] mx-auto overflow-hidden">
        <Home />
      </main>
      <Footer />
    </>
  );
}

export default App;
