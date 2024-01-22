import React from "react";
import { useState } from "react";
import "../App.css";
import Navbar from "./navbar"; // Assurez-vous que le chemin du fichier navbar est correct
import Footer from "./footer";
import Navleft from "./navleft"

function App() {
  // Si vous avez besoin de useState, assurez-vous de l'utiliser ici

  return (
    <>
      <Navbar />
      <Navleft />
      <Footer />
    </>
  );
}

export default App;
