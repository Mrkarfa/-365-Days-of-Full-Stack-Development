import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import GettingStarted from "./pages/GettingStarted";
import CoreConcepts from "./pages/CoreConcepts";
import Hooks from "./pages/Hooks";
import Advanced from "./pages/Advanced";
import CheatSheet from "./pages/CheatSheet";

import "./components/Navbar.css";
import "./components/Footer.css";
import "./pages/Home.css";
import "./pages/Pages.css";
import "./App.css";

gsap.registerPlugin(ScrollTrigger);

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    // Refresh ScrollTrigger on route change
    ScrollTrigger.refresh();
  }, [pathname]);

  return null;
}

function App() {
  return (
    <div className="app-layout">
      <ScrollToTop />
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/getting-started" element={<GettingStarted />} />
          <Route path="/core-concepts" element={<CoreConcepts />} />
          <Route path="/hooks" element={<Hooks />} />
          <Route path="/advanced" element={<Advanced />} />
          <Route path="/cheatsheet" element={<CheatSheet />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
