import React, { Component } from 'react'
import './LydiaDali.css'
import Spinner from '../../Spinner';
const BASE_URL = "https://peaceful-cliffs-33252.herokuapp.com/api/v1/wilders"
const USERNAME = "lydia-dali"

export default class LydiaDali extends Component {
  
  state = {
    user:{}
   }

  componentDidMount(){
    const USERNAME = "lydia-dali"
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
        <header>
        <h2>Devellopeuse Front-End</h2>
        <img id="lydiaPhoto" src={user.photo} />
       
        </header>

        <div className="myContain">
          <h1>{`${user.firstname} ${user.lastname}`}</h1>
          <div className="linkTitle" dangerouslySetInnerHTML={createMarkup(user.bio)}></div>
                   
        </div>

        <footer className="site-footer">
          
                <div className="copyright">
                  <a href={user.cv}>Télécharger mon CV !</a> 
                  <p className="telecharger">&copy; 2018 Lydia Dali | Wild Code School</p>
                </div>
        </footer>

    </div>
    )
  }
}
function createMarkup(stringyfiedHtml) {
  return {__html: stringyfiedHtml};
}
