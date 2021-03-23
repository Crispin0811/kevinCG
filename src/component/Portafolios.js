import React, { Component } from "react";
import PortafoliosItems from "./PortafoliosItems";

export default class Portafolios extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataPortafolios: [],
      dataPortafoliosFiltrado: [],
    };
  }

  componentDidMount() {
    this.llenarData();
  }

  llenarData = async () => {
    await fetch("https://portafolio-kcg.herokuapp.com/api/getPortafolios", {
      mode: "cors",
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((respuesta) => respuesta.json())
      .then((data) => {
        this.setState({
          dataPortafolios: data.portafolios,
          dataPortafoliosFiltrado: data.portafolios,
        });
      })
      .catch((e) => console.log("Ocurrio un error" + e));
  };

  handleClick = (e) => {
    const btnPresionado = e.target.textContent;
    const btnTodos = document.getElementById("todos");
    const btnFrond = document.getElementById("frond");
    const btnBack = document.getElementById("back");
    let dataFiltrado = [];

    if (btnPresionado === "Frond End") {
      dataFiltrado = this.state.dataPortafolios.filter(
        (data) => data.tipo === "front "
      );

      btnTodos.classList.remove("btn-filtro");
      btnFrond.classList.add("btn-filtro");
      btnBack.classList.remove("btn-filtro");

      this.setState({ dataPortafoliosFiltrado: dataFiltrado });
    } else if (btnPresionado === "Back End") {
      dataFiltrado = this.state.dataPortafolios.filter(
        (data) => data.tipo === "back"
      );
      btnTodos.classList.remove("btn-filtro");
      btnFrond.classList.remove("btn-filtro");
      btnBack.classList.add("btn-filtro");
      this.setState({ dataPortafoliosFiltrado: dataFiltrado });
    } else {
      btnTodos.classList.add("btn-filtro");
      btnFrond.classList.remove("btn-filtro");
      btnBack.classList.remove("btn-filtro");
      dataFiltrado = this.state.dataPortafolios;
    }
    this.setState({ dataPortafoliosFiltrado: dataFiltrado });
  };

  render() {
    return (
      <div id="portafolio" className="contenedor--secundario">
        <div className="portafolio">
          <h2 data-aos="fade-right" className="encabezado">
            Mis Proyectos
          </h2>
          <div data-aos="fade-right" className="portafolio__filtros">
            <button
              className="btn btn-filtro"
              onClick={this.handleClick}
              id="todos"
            >
              Todos
            </button>
            <button className="btn" onClick={this.handleClick} id="frond">
              Frond End
            </button>
            <button className="btn" onClick={this.handleClick} id="back">
              Back End
            </button>
          </div>

          <div className="portafolio__cards">
            {this.state.dataPortafoliosFiltrado.map((portafolio) => {
              return (
                <PortafoliosItems
                  key={portafolio.id}
                  data={portafolio}
                  btnPresionado={this.state.filtro}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
