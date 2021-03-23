import React from "react";

export default function ListaDireciones(props) {
  return (
    <ul className={props.clase} id={props.id}>
      <li className="ul--li">
        <a href="#inicio" onClick={props.onClick}>Inicio</a>
      </li>
      <li className="ul--li">
        <a href="#sobremi" onClick={props.onClick}>
          Sobre Mi
        </a>
      </li>
      <li className="ul--li ">
        <a href="#habilidades" onClick={props.onClick}>Habilidades</a>
      </li>
      <li className="ul--li">
        <a href="#portafolio" onClick={props.onClick}>Portafolio</a>
      </li>

      <li className="ul--li">
        <a href="#contactos" onClick={props.onClick}>Contactos</a>
      </li>
    </ul>
  );
}
