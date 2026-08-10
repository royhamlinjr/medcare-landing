import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import TrustedCompanies from "./components/TrustedCompanies/TrustedCompanies";
import Benefits from "./components/Benefits/Benefits";
import Consultants from "./components/Consultants/Consultants";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <TrustedCompanies />
      <Benefits />
      <Consultants />
    </div>
  );
}

export default App;