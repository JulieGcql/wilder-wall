import React, { Component } from 'react'
import { Icon } from 'semantic-ui-react'
import "../assets/css/footer.scss"
export default class Footer extends Component {
  constructor(props){
    super(props);
    this.state = {
      contactPhone: '06 31 00 45 71',
      contactEmail: 'caroline.larcie@wildcodeschool.fr',
      contactAddress: '1, place Francis Chirat, 13002 Marseille'
    }
  }
  render() {
    return (
      <div>
        <div className="wildersWallFooter" >
          <a href={`tel:${this.state.contactPhone}`}>
            <p>
              <Icon name='phone' size='large'/>
              {this.state.contactPhone}
            </p>
          </a>
          <p className="wilderCopyright">Wilders Wall - © Wild Code School {(new Date()).getFullYear()}</p>
          <a href={`mailto:${this.state.contactEmail}`}>
            <p>
              <Icon name='mail' size='large'/>
              {this.state.contactEmail}
            </p>
          </a>
        </div>
        <p className="">Wilders Wall - © Wild Code School {(new Date()).getFullYear()}</p>
      </div>
    )
  }
}
