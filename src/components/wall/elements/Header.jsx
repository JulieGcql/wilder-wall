import React, { Component } from 'react'
import Wild from "../assets/images/wild.png"
import Logo from "../assets/images/logo.png"
import "../assets/css/header.scss"

export default class Header extends Component {
  render() {
    return (
      <div className="headerContainer">
        <div className="logoContainer">
          <img src={Logo} width={200} />
          <img src={Wild} width={200} />
        </div>
      </div>
    )
  }
}
