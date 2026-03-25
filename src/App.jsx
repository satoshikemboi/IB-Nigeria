import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import SEO from "./components/SEO";

// Data Map
import { seoConfig } from "./data/seoData";

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

/**
 * SEO Wrapper Component
 * This must be inside the <Router> to access useLocation()
 */
const DynamicSEO = () => {
  const { pathname } = useLocation();
  // Match current path to our SEO config, or fallback to Home data
  const seo = seoConfig[pathname] || seoConfig["/"];

  return (
    <SEO
      title={seo.title}
      description={seo.description}
      path={pathname}
      type={seo.type}
    />
  );
};

export default function App() {
  return (
    <HelmetProvider>
      <Router>
        {/* Syncs SEO tags and scrolls to top on every route change */}
        <DynamicSEO />
        <ScrollToTop />

        <div className="flex flex-col min-h-screen bg-[#080c0e] selection:bg-green-500/30 selection:text-green-400">
          <Navbar />

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

              {/* 404 / Catch-all Redirect to Home */}
              <Route path="*" element={<Home />} />
            </Routes>
          </main>

          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}