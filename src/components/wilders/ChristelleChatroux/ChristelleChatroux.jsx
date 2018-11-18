import React, { Component } from "react";
import MySpinner from "./MySpinner";

//IMPORT MY OWN COMPONENTS:
import Header from "./components/01-Header/Header";
import Intro from "./components/02-Intro/Intro";
import Main from "./components/03-Main/Main";
import Footer from "./components/04-Footer/Footer";

//IMPORT SOME CSS:
import "./ChristelleChatroux.scss";

//SOME VARIABLES:
const BASE_URL = "https://peaceful-cliffs-33252.herokuapp.com/api/v1/wilders";
const SLUG = "christelle-chatroux";

export default class ChristelleChatroux extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      userFetched: false
    };
  }

  componentDidMount() {
    fetch(`${BASE_URL}/${SLUG}`)
      .then(response => response.json())
      .then(data => this.setState({ user: data.user, userFetched: true }))
      .catch(error => console.log(error));
  }

  render() {
    const { user, userFetched } = this.state;
    if (!userFetched) {
      return (
        <div className="container spinnerContainer">
          <MySpinner />
        </div>
      );
    }

    return (
      <div className="ice_container">
        <Header
          cv={this.state.user.cv}
          firstname={this.state.user.firstname}
          lastname={this.state.user.lastname}
        />
        <Intro
          firstname={this.state.user.firstname}
          lastname={this.state.user.lastname}
          photo={this.state.user.photo}
        />
        <Main bio={this.state.user.bio} wild={this.state.user.wilder_side} />

        <Footer
          email={this.state.user.email}
          phone={this.state.user.phone}
          linkedin={this.state.user.linkedin}
          github={this.state.user.github}
        />
      </div>
    );
  }
}
