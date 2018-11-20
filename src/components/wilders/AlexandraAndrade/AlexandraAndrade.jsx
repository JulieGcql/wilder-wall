import React, { Component } from 'react'
import Spinner from '../../Spinner';
import BodyAA from './componentsAA/bodyAA/BodyAA';
import FooterAA from './componentsAA/footerAA/FooterAA';

import './AlexandraAndrade.css'
import './AlexandraAndrade.css'

const BASE_URL = "https://peaceful-cliffs-33252.herokuapp.com/api/v1/wilders"
const USERNAME = "alexandra-andrade"

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
    console.log(user);
    if(!userFetched){
      return <div className="container spinnerContainer"><Spinner/></div>
    }
    return (
      <div className="cvContainerAlexa">
        <BodyAA
         firstname={user.firstname}
         lastname={user.lastname} 
         photo={user.photo}  
         monCv={user.cv}
         bio={user.bio}
         wild={user.wilder_side}
        />
        <FooterAA
          linkedin={user.linkedin}
          github={user.github}
          phone={user.phone}
        />
    
        {/* <div dangerouslySetInnerHTML={createMarkup(user.bio)}></div> */}
        {/* <a href={user.cv}>Télécharger mon CV !</a> */}
      </div>
    )
  }
}

