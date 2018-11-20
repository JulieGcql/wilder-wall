import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <header className="ice_headerGrid">
        <div className="ice_headerBg" />

        <nav className="ice_navLinks">
          <ul className="ice_navUl">
            <li className="ice_navLi">
              <a className="ice_myLinks" href="#parcours">
                Mon Parcours
              </a>
            </li>
            <li className="ice_navLi">
              <a className="ice_myLinks" href="#wild">
                Mon côté Wild
              </a>
            </li>
            <li className="ice_navLi">
              <a className="ice_myLinks" href="#contactMe">
                Me contacter
              </a>
            </li>
          </ul>
        </nav>

        <div className="ice_mainTitle">
          <h2>{`${this.props.firstname} ${this.props.lastname}`}</h2>
          <h1>Développeur Web Junior</h1>
        </div>

        <a
          className="ice_myLinks ice_download"
          href={`${this.props.cv}`}
          target="_blank"
        >
          Télécharger mon CV !
        </a>
      </header>
    );
  }
}
