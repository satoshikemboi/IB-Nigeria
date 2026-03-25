import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop"; // Import the utility

// Main Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Guides from "./pages/Guides";
import Brokers from "./pages/Brokers";
import Compare from "./pages/Compare";
import NGNRates from "./pages/NGNRates";

// Individual Broker Review Pages
import Exness from "./components/Exness";
import JustMarkets from "./components/JustMarkets";
import HFM from "./components/HFM";
import XM from "./components/XM";
import FBS from "./components/FBS";
import FxPro from "./components/FxPro"; 

function App() {
  return (
    <Router>
      {/* 1. ScrollToTop must be inside the Router but outside the Routes */}
      <ScrollToTop />

      {/* 2. Flex wrapper ensures the footer stays at the bottom of short pages */}
      <div className="flex flex-col min-h-screen bg-[#080c0e] selection:bg-green-500/30 selection:text-green-400">
        
        <Navbar />
        
        {/* 3. Main content area (flex-grow pushes the footer down) */}
        <main className="grow">
          <Routes>
            {/* Standard Pages */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/guides" element={<Guides />} />
            <Route path="/brokers" element={<Brokers />} />
            <Route path="/compare" element={<Compare />} />
            <Route path="/ngn-rates" element={<NGNRates />} />

            {/* Broker Detail Reviews */}
            <Route path="/brokers/exness" element={<Exness />} />
            <Route path="/brokers/justmarkets" element={<JustMarkets />} />
            <Route path="/brokers/hfm" element={<HFM />} />
            <Route path="/brokers/xm" element={<XM />} />
            <Route path="/brokers/fbs" element={<FBS />} />
            <Route path="/brokers/fxpro" element={<FxPro />} />

            {/* Optional: 404 Redirect or Home if route not found */}
            <Route path="*" element={<Home />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;