import React, { Component } from 'react';
import './ArvisHugo.scss';
import Spinner from '../../Spinner';
const BASE_URL = "https://peaceful-cliffs-33252.herokuapp.com/api/v1/wilders"
const USERNAME = "hugo-arvis"


export default class ArvisHugo extends Component {
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
      console.log (user),
      <div className="arvisTotal">
                    <div className="cvContainer">


                                <div >
                                  <h1 className="arvisName departGauche d">{`${user.firstname} ${user.lastname}`}</h1>
                                  <img className="arvisImage departGauche d" src={user.photo} alt="imagecv" />
                                  <a className="arvisCv departGauche d" href={user.cv}target="_blank"rel="noopener noreferrer">Télécharger mon CV !</a>
                                </div>
                    </div>

                    <div>

                    <div className="arvisBio" dangerouslySetInnerHTML={createMarkup(user.bio)}></div>
                    <div className="wilderSideArvis" dangerouslySetInnerHTML={createMarkup(user.wilder_side)}></div>

                    </div>

                  
                                <div className="arvisLink">
                                <ul className="whiteBck">
                                  <li className="shake"><a href={user.linkedin} target="_blank"rel="noopener noreferrer"><img className="arvisLogo" src="https://mbtskoudsalg.com/images/linkedin-logo-png-transparent-6.png" alt="logo linkedin"/></a></li>
                                  <li className="shake"><a href={user.github} target="_blank"rel="noopener noreferrer"><img className="arvisLogo" src="https://www.pofilo.fr/img/SPOF-github/github1600.png" alt="logo github"/></a></li>
                                  <li className="shake"><img className="arvisLogo" src="https://banner2.kisspng.com/20180422/ouw/kisspng-computer-icons-telephone-call-telephone-symbol-5adc94af106c81.7479463115244054230673.jpg" alt="logo telephone"/>{user.phone}</li>
                                </ul>
                    </div>
                    
      </div>
    )
  }
}

function createMarkup(stringyfiedHtml) {
  return {__html: stringyfiedHtml};
}
