import React, { Component } from 'react'
import { Card, CardImg, CardText,
    CardTitle, Button } from 'reactstrap';

class Projet extends Component {
    render () {
        return (
    <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
        <CardImg width="100%" src={this.props.img} />
        <CardTitle>{this.props.cardTitle}</CardTitle>
        <CardText>{this.props.text}</CardText>
        <a href={this.props.url}>Voir le projet</a>
    </Card>
        )
    }
}

export default Projet