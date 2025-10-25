import React from "react";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Reviews from "./components/Reviews";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Hero />
      <Features />
      <Reviews />
      <Pricing />
      <Footer />
    </>
  );
}

export default App;