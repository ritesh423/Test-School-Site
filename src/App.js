import React from "react";
import "./App.css";
import ShortContact from "./components/shortContact";
import Slider from "./components/slider";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div>
      <ShortContact />
      <Navbar />
      <Slider />
    </div>
  );
};

export default App;
