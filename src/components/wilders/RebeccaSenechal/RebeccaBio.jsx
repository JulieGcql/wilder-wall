import React, { Component } from 'react'
import { Button, Icon } from 'semantic-ui-react'

export default class RebeccaBio extends Component {
  render() {
    return (
      <div className="liensreseaux">
      <Button color='twitter'>
      <Icon name='twitter' /> Twitter
       </Button>
       <Button color='linkedin'>
      <Icon name='linkedin' /> LinkedIn
      </Button>
      </div>
    )
  }
}
