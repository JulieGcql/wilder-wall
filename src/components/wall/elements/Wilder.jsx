import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import "../assets/css/wilder.scss"

export default class Wilder extends Component {
  render() {
    const { wilder } = this.props;
    return (
      <div className="wilderCard">
        <Link to={`/wilders/${wilder.slug}`}>
          <img className="wilderAvatar" src={wilder.avatar} width={100} />
          <p>{wilder.slug}</p>
        </Link>
      </div>
    )
  }
}
