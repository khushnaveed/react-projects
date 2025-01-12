import { useState } from "react";
import "./App.css";
import Nav from "./components/Nav";

import Day from "./components/Day"
import Footer from "./components/Footer";

function App() {

  return (
    <div className="d-flex flex-column min-vh-100 container-fluid">
      <Nav />
      <Day day = "Monday"/>
      <Footer/>
    </div>
  );
}

export default App;