import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Iconos(props) {
  library.add(fas, fab);

  return (
    <a href={props.datos.href} target="blank" title={props.datos.titulo}>
      <FontAwesomeIcon icon={[`${props.datos.iconP}`, `${props.datos.icon}`]} />
    </a>
  );
}
