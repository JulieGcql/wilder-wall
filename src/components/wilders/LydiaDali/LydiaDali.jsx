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

    <div className="cvContainer-lydia">
        <header className="header-lydia">
        <h2 className="title-lydia">Developpeuse Front-End</h2>
        <img className="image-lydia" src={user.photo} />
       
        </header>

        <div className="myContain-lydia">
          <h1 className="bigtitle-lydia">{`${user.firstname} ${user.lastname}`}</h1>
          <div className="linkTitle-lydia" dangerouslySetInnerHTML={createMarkup(user.bio)}></div>
                   
        </div>

        <footer className="site-footer-lydia">
          
                <div className="copyright-lydia">
                  <a className="a-lydia" href={user.cv}>Télécharger mon CV !</a> 
                  <p className="telecharger-lydia">&copy; 2018 Lydia Dali | Wild Code School</p>
                </div>
        </footer>

    </div>
    )
  }
}
function createMarkup(stringyfiedHtml) {
  return {__html: stringyfiedHtml};
}
