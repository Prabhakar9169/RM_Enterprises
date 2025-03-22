import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import VisionValue from "./components/Vision-Value";
import BusinessDescription from "./components/BusinessDescription";
import Products from "./components/Products";
import Service from "./components/Service";
import Clients from "./components/Clients";
import Team from "./components/Team";
import "./App.css";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="min-h-screen bg-gray-50 text-gray-800">
        <Header />
        <HeroSection />
        <VisionValue />
        <BusinessDescription />
        <Service />
        <Products />
        <Team />
        <Clients />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
