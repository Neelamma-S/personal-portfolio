import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechStack from "./components/TechStack";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-gradient-to-br from-slate-100 via-blue-50 to-purple-100 min-h-screen">
      <Navbar />
      <Hero />
      <TechStack />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
