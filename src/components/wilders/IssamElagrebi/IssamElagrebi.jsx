import React, { Component } from 'react'
import './IssamElagrebi.scss'
import Spinner from '../../Spinner';


const BASE_URL = "https://peaceful-cliffs-33252.herokuapp.com/api/v1/wilders"
const USERNAME = "issam-elagrebi"

export default class IssamElagrebi extends Component {
  
    state = {
      user:{}
    }

  componentDidMount(){
    const USERNAME = "issam-el agrebi"
    fetch(`https://peaceful-cliffs-33252.herokuapp.com/api/v1/wilders/${USERNAME}`)
    .then((response) => response.json())
    .then((data) => this.setState({user: data.user}))
    .catch((error) => console.log(error))
  }
  
  render() {
    const {user, userFetched} = this.state;
    if(userFetched){
      return <div className="container spinnerContainer"><Spinner/></div>
    }
    return (
      
      <div className="cvContainer"> 
        <div className="header-issam">
        <h1>BIENVENUE SUR MON PROFIL</h1>
        <img className="me-issam" src={user.photo} alt="" />
        <h1>{`${user.firstname} ${user.lastname}`}</h1>
        <h2>Developpeur Junior Full Stack</h2>
        </div>
        <div className="paragraphe-issam">
        <h3>Ma Description</h3>
        <div dangerouslySetInnerHTML={createMarkup(user.bio)}></div>
        </div>

        <div className="wild-issam">
        <h3>Mon Côté Wild</h3>
        <p>Les cours sont finis je rentre chez moi j'enfile mes crampons, mes proteges tibias et je tape sur le ballon rond jusqu'à la victoire</p>
        <p>Et pour fêter sa je me soulève les manches je mets mon tablier te ravir les papilles de tous</p>
        </div>

        <footer className="foot-issam">
        <a href={user.cv}>Télécharger mon CV !</a>
        <p>Create By El Agrebi Issam with Reac.Js</p>
        </footer>
        
      </div>
    )
  }
}

function createMarkup(stringyfiedHtml) {
  return {__html: stringyfiedHtml};
}
