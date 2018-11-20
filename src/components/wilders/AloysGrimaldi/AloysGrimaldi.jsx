import React, { Component } from 'react'
import './AloysGrimaldi.scss'
import Spinner from '../../Spinner';
import Aloyscv from './Aloyscv.jpg';
import Aloyswild from './Aloyswild.jpg';

const BASE_URL = "https://peaceful-cliffs-33252.herokuapp.com/api/v1/wilders"
const USERNAME = "aloys-grimaldi"


export default class AloysGrimaldi extends Component {
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
      <div className="Skull">
          <div className="HeaderAlo">
            <h1 className="NameAlo">{`${user.firstname} ${user.lastname}`}</h1> 
            <h2 className="subTitleAloys">Développeuse Web Junior React et Node JS</h2>
            <div className="Click">
              <a href="#Aloys" alt="Click me"><img src="http://image.noelshack.com/fichiers/2018/47/1/1542639574-fox.png" className="Fox" /></a>
            </div>
          </div>
        {/* <div className="Description"></div> */}        
        <div className="ContactAlo"></div> 
        <img src={Aloyscv} className="Alo" />
        <img src={Aloyswild} className="Alowild" />
        <div className="PresentationAlo">
        
        <div id="Aloys">
        <div class="boxAloys">
          <div class="boxtext">
          <h1 className="Qui">Qui suis-je ?</h1><br />
            <div className="WildsideAlo" dangerouslySetInnerHTML={createMarkup(user.wilder_side)}></div><br />
            <div className="BioAlo" dangerouslySetInnerHTML={createMarkup(user.bio)}></div>
        </div>
            <a href={user.cv} className="CVAlo">Télécharger mon CV !</a> 
            
        </div> 
        </div>
        <div className="FooterAloys">
        <a href={user.github} className="Git"><img src="http://image.noelshack.com/fichiers/2018/47/1/1542618901-github.png"  alt="Github" className="Social" /></a>
        <a href={user.linkedin} className="Link"><img src="http://image.noelshack.com/fichiers/2018/47/1/1542621169-linkedin.png"  alt="Linkedin" className="Social" /></a>
       <div className="mailAloys"> <p>aloys.grimaldi@gmail.com</p> <br/> <p>0605336348</p>  </div>
        </div>
      </div>
        </div>
    )
}
}

function createMarkup(stringyfiedHtml) {
return {__html: stringyfiedHtml};
}
