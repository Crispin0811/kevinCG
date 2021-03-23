import React, { Component } from "react";

import Iconos from "../component/Iconos";

export default class Contactos extends Component {
  state = {
    datosIconos: [
      {
        id: "1",
        href: "mailto:kevin.crispin.g.gmail.com",
        titulo: "Correo",
        iconP: "fas",
        icon: "envelope",

      },
      {
        id: "2",
        href: "https://web.facebook.com/kevin.crispingonzales",
        titulo: "Facebook",
        iconP: "fab",
        icon: "facebook",
      },
      {
        id: "3",
        href: "https://www.instagram.com/kevincrisgon/",
        titulo: "Instagram",
        iconP: "fab",
        icon: "instagram",
      },
      {
        id: "4",
        href:
          "https://api.whatsapp.com/send/?phone=51975247531&text=Hola%20KevinCG.,%20v%C3%AD+tu+portafolio+y+me+interesa+contactar+contingo.&app_absent=0",
        titulo: "Whatsapp",
        iconP: "fab",
        icon: "whatsapp",
      },
      {
        id: "5",
        href: "https://www.linkedin.com/in/kevincrispingonzales/",
        titulo: "Linkedin",
        iconP: "fab",
        icon: "linkedin",
      },
      {
        id: "6",
        href: "https://github.com/Crispin0811",
        titulo: "GitHub",
        iconP: "fab",
        icon: "github",
      },
    ],
  };

  render() {
    return (
      <div id="contactos" className="contactos ">
        <div className="contactos__icons">
          {this.state.datosIconos.map((icono) => {
            return <Iconos key={icono.id} datos={icono} />;
          })}
        </div>
        <div className="contactos__derechos">
          <h6>&copy; Todos los derechos reservados</h6>
          <h6>Kevin Crispin Gonzales</h6>
        </div>
      </div>
    );
  }
}
