import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap';
import Wilder from './Wilder';

export default class Wilders extends Component {
  render() {
    return (
      <Container>
        <Row>
          {
            this.props.wilders.map((wilder) => {
              return (
                <Col md={{ size: 4, order: 2, offset: 0 }} key={wilder.id}>
                  <Wilder wilder={wilder}/>
                </Col>
              )
            })
          }
        </Row>
      </Container>
    )
  }
}
