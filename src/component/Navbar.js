import React, { Component } from "react";
// import { Link } from "react-router-dom";

import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ListaDireciones from "./ListaDireciones";

export default class Navbar extends Component {
  componentDidMount() {
    this.barraOscura();
    this.barraCarga();
  }

  barraOscura = () => {
    document.addEventListener("scroll", () => {
      const navbar = document.querySelector(".navbar");

      navbar.classList.toggle("navbar--oscuro", window.scrollY > 0);
    });
  };

  barraCarga = () => {
    document.addEventListener("scroll", () => {
      const barraCarga = document.querySelector(".barraCarga");
      const width = (window.scrollY / this.getScrollMaxY()) * 100;
      barraCarga.style.width = `${width}%`;
    });
  };

  getScrollMaxY = () => {
    let innerh = window.innerHeight || window.body.clientHeight,
      yWithScroll = 0;
    if (window.innerHeight && window.scrollMaxY) {
      yWithScroll = window.innerHeight + window.scrollMaxY;
    } else if (document.body.scrollHeight > document.body.offsetHeight) {
      yWithScroll = document.body.scrollHeight;
    } else {
      yWithScroll = document.body.offsetHeight;
    }
    return yWithScroll - innerh;
  };

  handleClick = (e) => {
    const botonPresionado = e.target.parentElement.classList[1];
    const navRespovive = document.getElementById("responsivo");
    const btnHamburguesa = document.querySelector(".btnHamburguesa");
    const btnX = document.querySelector(".btnX");
    const lista = e.target.tagName;

    if (botonPresionado === "fa-bars" || botonPresionado === "btnHamburguesa") {
      btnX.style.display = "flex";
      btnHamburguesa.style.display = "none";
      navRespovive.style.right = "0";
    } else if (botonPresionado === "fa-times" || botonPresionado === "btnX") {
      btnX.style.display = "none";
      btnHamburguesa.style.display = "flex";
      navRespovive.style.right = "-100%";
    }

    if (lista === "A") {
      navRespovive.style.right = "-100%";
      btnHamburguesa.style.display = "flex";
      btnX.style.display = "none";
    }
  };

  render() {
    return (
      <div className="navbar">
        <div className="navbar__logo">Kevin CG.</div>
        <ListaDireciones clase="navbar__lista" />
        <div
          className="diplayHidden btnHamburguesa"
          id="navIconBar"
          onClick={this.handleClick}
        >
          <FontAwesomeIcon icon={faBars} />
        </div>
        <div
          className="diplayHidden btnX"
          id="navIconBarX"
          onClick={this.handleClick}
        >
          <FontAwesomeIcon icon={faTimes} />
        </div>
        <ListaDireciones
          clase="navbar__lista-responsivo"
          id="responsivo"
          onClick={this.handleClick}
        />
      </div>
    );
  }
}
