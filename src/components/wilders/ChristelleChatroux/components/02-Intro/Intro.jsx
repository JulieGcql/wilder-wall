import React, { Component } from "react";

export default class Intro extends Component {
  render() {
    return (
      <section className="ice_introGrid">
        <div className="ice_intro_content">
          <div className="ice_pitch">
            <p>
              Dynamique, rigoureuse, fortement attirée par les nouvelles
              technologies, je souhaite pouvoir chaque jour continuer à étendre
              mes compétences dans le développement web.
            </p>
          </div>
          <div className="ice_myFace">
            <img src={this.props.photo} alt="myFace" />
          </div>
        </div>
      </section>
    );
  }
}
