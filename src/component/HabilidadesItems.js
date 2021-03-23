import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import AOS from "aos";

function ItemsLista(props) {
  library.add(fas, fab);

  return (
    <div className="habilidades__card-lista">
      <FontAwesomeIcon
        className="habilidades__card-icon"
        icon={[`${props.habilidad.iconP}`, `${props.habilidad.icon}`]}
      />

      <h3 className="habilidades__card-descripcion">
        {props.habilidad.descripcion}
      </h3>
      <div className="habilidades__card-porcentaje">
        <div
          className="porcenjate"
          style={{ width: `${props.habilidad.prorcentaje}%` }}
        ></div>
      </div>
    </div>
  );
}
export default function HabilidadesItems(props) {
  AOS.init({ duration: 800 });

  return (
    <div
      data-aos="zoom-in"
      data-aos-duration="800"
      className="habilidades__card"
    >
      <h2 className="habilidades__card-titulo">{props.data.titulo}</h2>
      {props.data.habilidades.map((habilidad) => {
        return <ItemsLista habilidad={habilidad} key={habilidad.id} />;
      })}
    </div>
  );
}
