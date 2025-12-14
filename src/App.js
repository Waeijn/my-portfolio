import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Layout Components
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

// Page Components
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Technologies from "./components/pages/Technologies";
import Experience from "./components/pages/Experience";
import Projects from "./components/pages/Projects";
import Certifications from "./components/pages/Certifications";
import Contact from "./components/pages/Contact";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-bg-primary">
        <Navbar />
        <main className="flex-1 pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/technologies" element={<Technologies />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/certifications" element={<Certifications />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
