import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepages from "./pages/Homepages";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import MainLayout from "./layouts/MainLayout";
import ScrollToTop from "./components/ScrollToTop";
import "./App.css";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Homepages />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
