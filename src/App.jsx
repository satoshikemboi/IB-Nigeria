import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Guides from "./pages/Guides";
import Brokers from "./pages/Brokers";
import Compare from "./pages/Compare";
import NGNRates from "./pages/NGNRates";
import Exness from "./components/Exness";
import JustMarkets from "./components/JustMarkets";
import HFM from "./components/HFM";
import XM from "./components/XM";
import FBS from "./components/FBS";
import FxPro from "./components/FxPro"; 

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/guides" element={<Guides />} />
        <Route path="/brokers" element={<Brokers />} />
        <Route path="/compare" element={<Compare />} />
        <Route path="/ngn-rates" element={<NGNRates />} />
        <Route path="/brokers/exness" element={<Exness />} />
        <Route path="/brokers/justmarkets" element={<JustMarkets />} />
        <Route path="/brokers/hfm" element={<HFM />} />
        <Route path="/brokers/xm" element={<XM />} />
        <Route path="/brokers/fbs" element={<FBS />} />
        <Route path="/brokers/fxpro" element={<FxPro />} />
      </Routes>
    </Router>
  );
}

export default App;