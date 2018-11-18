import React, { Component } from 'react'
import Spinner from '../../Spinner';
import 'semantic-ui-css/semantic.min.css';
import './RebeccaSenechal.scss'
import { Icon } from 'semantic-ui-react'

const BASE_URL = "https://peaceful-cliffs-33252.herokuapp.com/api/v1/wilders"
const USERNAME = "rebecca-senechal"


export default class RebeccaSenechal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      userFetched: false
    }
  }

  componentDidMount() {
    fetch(`${BASE_URL}/${USERNAME}`)
      .then((response) => response.json())
      .then((data) => this.setState({ user: data.user, userFetched: true }))
      .catch((error) => console.log(error))
    console.log("user1 :", this.state.user)


  }



  render() {
    console.log("user :", this.state.user)
    const { user, userFetched } = this.state;
    if (!userFetched) {
      return <div className="container spinnerContainer"><Spinner /></div>
    }
    return (
      <div>
        <div className="topContainer">
         
        </div>
        
          <div className="cvContainer">
          <div className="monMatricule">
          <h2>{`${user.firstname} ${user.lastname}`}</h2>
          <a className="lienCv" href={user.cv}>Télécharger mon CV</a>
        </div>
            <div dangerouslySetInnerHTML={createMarkup(user.bio)} className="cvbio"></div>
            <div dangerouslySetInnerHTML={createMarkup(user.wilder_side)} className="cvwild"></div>
            <i class="huge arrow circle up icon"></i>
        </div>
        
      </div>
    )
  }


}
function createMarkup(stringyfiedHtml) {
  return { __html: stringyfiedHtml };
}


// <img src={user.photo} className="cvpicture" alt="visage" />