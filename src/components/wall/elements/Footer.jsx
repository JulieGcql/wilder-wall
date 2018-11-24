import React, { Component } from 'react'
import { Grid, Icon } from 'semantic-ui-react'
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
      <div className="wildersWallFooter">
        <Grid>
          <Grid.Row  columns={3}>
            <Grid.Column>
            <a href={`tel:${this.state.contactPhone}`}>
              <p>
                <Icon name='phone' size='large'/>
                {this.state.contactPhone}
              </p>
            </a>
            </Grid.Column>
            <Grid.Column>
              <p className="wilderCopyright">Wilder Wall - © Wild Code School {(new Date()).getFullYear()}</p>
            </Grid.Column>
            <Grid.Column>
            <a href={`mailto:${this.state.contactEmail}`}>
              <p>
                <Icon name='mail' size='large'/>
                {this.state.contactEmail}
              </p>
            </a>
            </Grid.Column>
          </Grid.Row>
          <a 
            href="https://www.google.com/maps/place/1+Place+Francis+Chirat,+13002+Marseille/@43.3008396,5.3649007,17z/data=!3m1!4b1!4m5!3m4!1s0x12c9c0e9faae70ed:0x736512f479c2ac6f!8m2!3d43.3008396!4d5.3670894"
            target="_blank"
            id="schoolAdressMapLink"
          >
            <p className="footerAddressContact">{this.state.contactAddress}</p>
          </a>
        </Grid>
      </div>
    )
  }
}




          
          