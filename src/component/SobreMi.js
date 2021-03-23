import React, { Component } from "react";
import perfil from "../img/perfil.jpg";
import AOS from "aos";

export default class SobreMi extends Component {
  componentDidMount() {
    AOS.init({ duration: 800 });
  }

  render() {
    return (
      <div id="sobremi" className="contenedor--secundario">
        <div className="sobreMi">
          <h2 data-aos="fade-right" className="encabezado">
            ¿Quien Soy?
          </h2>

          <div className="sobreMi__descripcion">
            <div data-aos="zoom-in" className="sobreMi__descripcion-img">
              <img src={perfil} alt="" />
            </div>
            <div data-aos="zoom-in" className="sobreMi__descripcion-parrafo">
              <p>
                Mi nombre es <span>Kevin Crispin Gonzales</span> , egresado de
                Ingeniería de Sistemas de la Universidad Nacional José Faustino
                Sánchez Carrión, tengo experiencia en desarrollo Full Stack
                además, cuento con experiencia en el análisis de datos y
                documentación de software.
              </p>
              <p>
                Me considero una persona muy dedicada y gran capacidad de
                afrontar nuevos retos.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
