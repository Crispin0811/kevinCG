import React, { Component } from "react";

// COMPONENTES
import HabilidadesItems from "./HabilidadesItems";
import AOS from "aos";

export default class Habilidades extends Component {
  state = {
    datosItems: [
      {
        id: "1",
        titulo: "Back End",
        habilidades: [
          {
            id: "1",
            iconP: "fab",
            icon: "node",
            descripcion: "Node JS",
            prorcentaje: "60",
          },
          {
            id: "2",
            iconP: "fab",
            icon: "java",
            descripcion: "Java",
            prorcentaje: "40",
          },
        ],
      },
      {
        id: "2",
        titulo: "Frond End",
        habilidades: [
          {
            id: "1",
            iconP: "fab",
            icon: "html5",
            descripcion: "HTML",
            prorcentaje: "65",
          },
          {
            id: "2",
            iconP: "fab",
            icon: "css3-alt",
            descripcion: "CSS",
            prorcentaje: "45",
          },
          {
            id: "3",
            iconP: "fab",
            icon: "js-square",
            descripcion: "Java Script",
            prorcentaje: "60",
          },
          {
            id: "4",
            iconP: "fab",
            icon: "sass",
            descripcion: "Sass",
            prorcentaje: "45",
          },
          {
            id: "5",
            iconP: "fab",
            icon: "react",
            descripcion: "React JS",
            prorcentaje: "30",
          },
        ],
      },
      {
        id: "3",
        titulo: "Base de Datos",
        habilidades: [
          {
            id: "1",
            iconP: "fas",
            icon: "database",
            descripcion: "Mondo BD",
            prorcentaje: "45",
          },
          {
            id: "2",
            iconP: "fas",
            icon: "database",
            descripcion: "MySQL",
            prorcentaje: "50",
          },
          {
            id: "3",
            iconP: "fas",
            icon: "database",
            descripcion: "SQL",
            prorcentaje: "45",
          },
        ],
      },
      {
        id: "4",
        titulo: "Otros",
        habilidades: [
          {
            id: "1",
            iconP: "fab",
            icon: "github",
            descripcion: "Git",
            prorcentaje: "45",
          },
        ],
      },
    ],
  };
  componentDidMount() {
    AOS.init({ duration: 800 });
  }

  render() {
    return (
      <div id="habilidades" className="contenedor ">
        <div className="habilidades">
          <h2 data-aos="fade-right" className="encabezado">
            Mis Habilidades
          </h2>
          <div className="habilidades__cards">
            {this.state.datosItems.map((habilidad, item) => {

              return (
                <HabilidadesItems
                  key={habilidad.id}
                  data={habilidad}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
