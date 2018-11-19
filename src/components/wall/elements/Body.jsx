import React, { Component } from 'react'
import { Container } from 'reactstrap';
import Wilders from './Wilders';
import Spinner from '../../Spinner';
import "../assets/css/body.scss"

export default class Body extends Component {
  constructor(props){
    super(props);
    this.state = {
      wilders: []
    }
  }

  componentDidMount = () => {
    fetch("https://peaceful-cliffs-33252.herokuapp.com/api/v1/wilders")
    .then((data) => data.json())
    .then((result) => this.setState({wilders: result.users}))
  }

  render() {
    // return spinner if wilders are not fetched
    if(this.state.wilders.length < 1){
      return (
        <div className="spinnerContainerWall">
          <Spinner />
        </div>
      )
    }
    // return wilders if fetched
    return (
      <div className="wildersContainer">
        <Wilders wilders={this.state.wilders}/>
      </div>
    )
  }
}
