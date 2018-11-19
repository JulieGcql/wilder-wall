import React, { Component } from 'react';
import './JulieGicquel.scss';
import Spinner from '../../Spinner';
import tel from './tel.png';
import mail from './mail.png';
import github from './github.png';
import linkedin from './linkedin.png';
import fleche from './fleche.png';

const BASE_URL = "https://peaceful-cliffs-33252.herokuapp.com/api/v1/wilders"
const USERNAME = "julie-gicquel"


export default class JulieGicquel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      userFetched: false,
      on: true,
      on1: true,
      on2: true
    }
  }
  

  componentDidMount() {
    fetch(`${BASE_URL}/${USERNAME}`)
      .then((response) => response.json())
      .then((data) => this.setState({ user: data.user, userFetched: true }))
      .catch((error) => console.log(error))
  }

  collapse = () => {
    this.setState({on:!this.state.on})
  }

  collapse1 = () => {
    this.setState({on1:!this.state.on1})
  }

  collapse2 = () => {
    this.setState({on2:!this.state.on2})
  }

  render() {
    const { user, userFetched } = this.state;
    if (!userFetched) {
      return <div className="container spinnerContainer"><Spinner /></div>
    }
    const change = this.state.on ? "Gicquel_light" : "Gicquel_Infos";
    const change1 = this.state.on1 ? "Gicquel_light" : "Gicquel_Wild";
    const change2 = this.state.on2 ? "Gicquel_light" : "Gicquel_Contact";

    return (
      <div className="Gicquel_Container">
        <div className="Gicquel_Header">
          <img src={user.photo} className="Gicquel_Photo" alt="Julie Gicquel"/>
          <div className="Gicquel_Titre">
            <h2 className="Gicquel_Titre">{`${user.firstname} ${user.lastname}`}</h2>
            <h3 className="Gicquel_Titre">Développeuse web junior fullstack React.js/Node.js</h3>
          </div>
        </div>
        <div className="Gicquel_Sections">
          <button className="Gicquel_Button" onClick={()=>this.collapse()}>
            À propos de moi
            <img src={fleche} alt="Cliquez" className="Gicquel_fleche"/>
          </button>
          <div className={change} collapse={()=>this.collapse()}>
            <div dangerouslySetInnerHTML={createMarkup(user.bio)} className="Gicquel_bio"></div>
            <a href={user.cv} target="_blank" className="Gicquel_Link">
              <div className="Gicquel_CV">
                CV
              </div>
            </a>
          </div>
        </div>
        <div className="Gicquel_Sections">
          <button className="Gicquel_Button" onClick={()=>this.collapse1()}>
            Mon côté Wild
            <img src={fleche} alt="Cliquez" className="Gicquel_fleche"/>
          </button>
          <div className={change1} collapse={()=>this.collapse1()}>
            <div dangerouslySetInnerHTML={createMarkup(user.wilder_side)} className="Gicquel_wildSide"></div>
          </div>
        </div>
        <div className="Gicquel_Sections">
          <button className="Gicquel_Button" onClick={()=>this.collapse2()}>
            Retrouvez-Moi
            <img src={fleche} alt="Cliquez" className="Gicquel_fleche"/>
          </button>
          <div className={change2} collapse={()=>this.collapse2()}>
            <p className="Gicquel_contactMe">It's dangerous to go alone !</p>
            <p className="Gicquel_contactMe">Select your favorite method of contact:</p>
            <div className="Gicquel_infosContainer">      
              <a href="tel:+33625937020"><img src={tel} className="Gicquel_icons" alt="Téléphone"/></a>
                <p className="Gicquel_Tel">{user.phone}</p>
              <a href="mailto:{user.email}"><img src={mail} className="Gicquel_icons" alt="Email"/></a>
              <a href={user.github} target="_blank"><img src={github} className="Gicquel_icons" alt="Github"/></a>
              <a href={user.linkedin} target="_blank"><img src={linkedin} className="Gicquel_icons" alt="Linkedin"/></a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

function createMarkup(stringyfiedHtml) {
  return { __html: stringyfiedHtml };
}

