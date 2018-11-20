import React, { Component } from 'react'
import "../assets/css/footer.scss"
export default class Footer extends Component {
  render() {
    return (
      <div className="wildersWallFooter" >
        <p className="wilderCopyright">Wilders Wall - © Wild Code School {(new Date()).getFullYear()}</p>
      </div>
    )
  }
}
