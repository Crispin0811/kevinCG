import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import AOS from "aos";
// OTROS
import cv from "../files/cv.pdf";

export default class Home extends Component {
  componentDidMount() {
    AOS.init({ duration: 800 });
  }
  render() {
    return (
      <div id="inicio" className="contenedor">
        <div className="home">
          <div className="home__detalles">
            <div data-aos="fade-right" className="home__descripcion">
              <h2>Hola,</h2>
              <h2>
                Soy <span>Kevin</span>
              </h2>
              <h2>Desarrollador Full Stack</h2>
            </div>

            <a
              href={cv}
              className="btn textDecorationNone"
              download="CV_Crispin"
            >
              Descargar CV
            </a>

            <div className="home__icons">
              <a
                href="https://github.com/Crispin0811"
                target="blank"
                title="GitHub"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a
                href="https://www.linkedin.com/in/kevincrispingonzales/"
                target="blank"
                title="Linkedin"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a
                href="https://web.facebook.com/kevin.crispingonzales/"
                target="blank"
                title="Facebook"
              >
                <FontAwesomeIcon icon={faFacebook} />
              </a>
            </div>
          </div>
          <div data-aos="fade-left" className="home__img">
            <img
              src="https://res.cloudinary.com/duzf4c5dl/image/upload/v1615344425/Portafolio/imagenes/img_xp1uc9.svg"
              alt="dev"
            />
          </div>
        </div>
      </div>
    );
  }
}
