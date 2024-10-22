import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import "./App.css";

function App() {
  const [headerTitle, setHeaderTitle] = useState("Welcome to My Website");
  const [footerInfo, setFooterInfo] = useState(
    "© 2023 My Website. All rights reserved."
  );

  return (
    <Router>
      <div>
        <Header title={headerTitle} />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer info={footerInfo} />
      </div>
    </Router>
  );
}

export default App;
