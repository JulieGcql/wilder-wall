import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Card, Icon, Image } from 'semantic-ui-react'
import "../assets/css/wilder.scss"

export default class Wilder extends Component {
  render() {
    const { wilder } = this.props;
    return (
      <Card>
        <Link to={`/wilders/${wilder.slug}`}>
        <Image src={wilder.avatar} />
        <Card.Content>
          
        </Card.Content>
        <Card.Content extra>
          <Card.Header>{wilder.firstname}</Card.Header>
        </Card.Content>
        </Link>
      </Card>
    )
  }
}
