import React, { Component } from 'react'
import Header from "./elements/Header";
import Body from "./elements/Body";
import Footer from "./elements/Footer";

export default class index extends Component {
  render() {
    return (
      <div className="wildersWallContainer">
        <Header />
        <Body />
        <Footer />
      </div>
    )
  }
}
