import React, { Component } from "react";

//Function used to use the text format we receive from the API:
function createMarkup(stringyfiedHtml) {
  return { __html: stringyfiedHtml };
}

export default class MonParcours extends Component {
  render() {
    return (
      <section className="ice_section">
        <h3 id="parcours">{`Mon parcours`}</h3>
        <div dangerouslySetInnerHTML={createMarkup(this.props.bio)} />
      </section>
    );
  }
}
