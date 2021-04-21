import React from "react";

export default function PortafoliosItems(props) {
  return (
    <div data-aos="zoom-in" className="portafolio__card">
      <div className="portafolio__img ">
        <img src={props.data.urlImg} alt={props.data.titulo} />
      </div>

      <div className="portafolio__descripcion">
        <h2>{props.data.titulo}</h2>
        <p>{props.data.descripcion}</p>
        <a href={props.data.urlGit} target="_blank" rel="noreferrer">
          Ver GitHub
        </a>
      </div>
    </div>
  );
}
