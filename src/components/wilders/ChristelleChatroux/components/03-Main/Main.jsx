import React, { Component } from "react";
import MonParcours from "./MonParcours";
import WildMe from "./WildMe";
// LET'S IMPORT SOME LOGOS:
import HTMLLogo from "../../images/html440.png";
import CSSLogo from "../../images/css440.png";
import jsLogo from "../../images/js440.png";
import reactLogo from "../../images/react440.png";
import githubLogo from "../../images/github440.png";
import nodeLogo from "../../images/node440.png";
import batman from "../../images/batman.jpg";
import panier from "../../images/panier.jpg";
import underConstruction from "../../images/enCours.png";

export default class Main extends Component {
  render() {
    return (
      <section className="ice_mainGrid">
        <div className="ice_mainParcours">
          <MonParcours bio={this.props.bio} />
        </div>
        <div className="ice_mainSkills">
          <h3>Skills</h3>
          <img src={HTMLLogo} />
          <img src={CSSLogo} />
          <img src={jsLogo} />
          <img src={nodeLogo} />
          <img src={reactLogo} />
          <img src={githubLogo} />
          <p>...</p>
        </div>

        <div className="ice_mainWild">
          <WildMe wild={this.props.wild} />
        </div>
        <div className="ice_mainProjects">
          <h3>Mes Collaborations</h3>

          <div className="ice_gallery">
            <div>
              <img src={underConstruction} />
              <p>
                Provouvoir le savoir faire de l'entreprise 3dvp par la création
                du prototype d'une application web.
              </p>
              <p>
                <span>En réalisation</span>
              </p>
            </div>
            <div>
              <div>
                <p>
                  Faire une appli qui permette d'avoir des infos sur ses
                  personnages de comics préférés.
                </p>
                <p>ReactJS / SCSS / Reactstrap</p>
              </div>
              <a
                href="https://project-superheroes.herokuapp.com/"
                target="_blank"
              >
                <img src={batman} />
              </a>
            </div>
            <div>
              <a href="https://clemarech.github.io/projet1/" target="_blank">
                <img src={panier} />
              </a>
              <p>
                Réaliser un site (blog) présentant les différents bons plans du
                quartier du Panier, Marseille.
              </p>
              <p>HTML - CSS - BOOTSTRAP</p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
