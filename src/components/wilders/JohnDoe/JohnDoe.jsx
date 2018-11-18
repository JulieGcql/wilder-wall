import React, { Component } from 'react'
import './JohnDoe.scss'
import Spinner from '../../Spinner';
const BASE_URL = "https://peaceful-cliffs-33252.herokuapp.com/api/v1/wilders"
const USERNAME = "david-marie"

export default class JohnDoe extends Component {
  constructor(props){
    super(props);
    this.state = {
      user: {},
      userFetched: false
    }
  }

  componentDidMount(){
    fetch(`${BASE_URL}/${USERNAME}`)
    .then((response) => response.json())
    .then((data) => this.setState({user: data.user, userFetched: true}))
    .catch((error) => console.log(error))
  }
  
  render() {
    const {user, userFetched} = this.state;
    if(!userFetched){
      return <div className="container spinnerContainer"><Spinner/></div>
    }
    return (
      <div className="cvContainer">
        <img src={user.photo} alt="johnDoe" />
        <h1>{`${user.firstname} ${user.lastname}`}</h1>
        <div dangerouslySetInnerHTML={createMarkup(user.bio)}></div>
        <a href={user.cv}>Télécharger mon CV !</a>
      </div>
    )
  }
}

function createMarkup(stringyfiedHtml) {
  return {__html: stringyfiedHtml};
}
