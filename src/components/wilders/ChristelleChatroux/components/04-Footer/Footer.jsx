import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <footer id="contactMe" className="ice_footerGrid">
        <div>
          <p>
            <i className="fas fa-phone-square" />
          </p>
          <p>{this.props.phone}</p>
        </div>
        <div>
          <p>
            <i className="fas fa-at" />
          </p>
          <p>
            <a href="mailto:someone@example.com">{this.props.email}</a>
          </p>
        </div>
        <div>
          <p>
            <i className="fab fa-linkedin" />
          </p>
          <p>
            <a href={this.props.linkedin} target="_blank">
              chrischatroux
            </a>
          </p>
        </div>
        <div>
          <p>
            <i className="fab fa-github" />
          </p>
          <p>
            <a href={this.props.github} target="_blank">
              icecriss
            </a>
          </p>
        </div>
      </footer>
    );
  }
}
