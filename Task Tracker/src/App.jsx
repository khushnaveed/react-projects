import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Day from "./components/Day"
import Footer from "./components/Footer";

function App() {

  return (
    <div className="d-flex flex-column min-vh-100 container-fluid">
      <Navbar />
      <Day day = "Monday"/>
      <Footer/>
    </div>
  );
}

export default App;
