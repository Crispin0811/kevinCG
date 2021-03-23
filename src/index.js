import React from "react";
import ReactDOM from "react-dom";
import "normalize.css/normalize.css";
import "./styles.css";
import "aos/dist/aos.css";
// COMPONENTES
import Navbar from "../src/component/Navbar";
import Home from "../src/component/Home";
import SobreMi from "../src/component/SobreMi";
import Habilidades from "../src/component/Habilidades";
import Portafolios from "../src/component/Portafolios";
import Contactos from "../src/component/Contactos";

ReactDOM.render(
  <>
    <Navbar />
    <div className="barraCarga">
      <h2>.</h2>
    </div>
    
    <Home />
    <SobreMi />
    <Habilidades />
    <Portafolios />
    <Contactos />
  </>,
  document.getElementById("root")
);
