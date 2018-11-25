import React, { Component } from 'react';
import './JulienBertocchini.scss';
import github from './github.png';
import linkedin from './linkdin.png';
import mail from './mail.png';
import { Header } from 'semantic-ui-react';




const BASE_URL = "https://peaceful-cliffs-33252.herokuapp.com/api/v1/wilders"
const USERNAME = "julien-bertocchini"

export default class JulienBertocchini extends Component {
  state = {
    user: {},
    userFetched: false
  }


componentDidMount(){
  fetch(`${BASE_URL}/${USERNAME}`)
  .then((response) => response.json())
  .then((data) => this.setState({user: data.user, userFetched: true}))
  .catch((error) => console.log(error))
}

render() {
  const {user, userFetched} = this.state;
  // if(!userFetched){
  //   return <div className="container spinnerContainer"><Spinner/></div>
  // }
  return (

    // -----------Header---------

    <div>
      <div className='logo_bertocchini'>
        <h2 className='logoh2_bertocchini'>Je suis <span className="logospan_bertocchini">Julien</span></h2>
      </div>
      <div className="header_bertocchini_container">
        <div className="header_bertocchini_text">
          <h6 className='subtitle_header_bertocchini'>Développeur Junior Fullstack React| Node JS</h6>
          <h2 className='title_header_bertocchini'>Nouvel <br/>arrivage</h2>
        </div>
      </div>
    
      {/* -----------Body--------- */}

    <div className='body_bertocchini_container'>
      <div className='profil_bertocchini'>
        <div className='text_container_bertocchini'>
          <p className='text_bertocchini' dangerouslySetInnerHTML={createMarkup(user.bio)}></p>
        </div>
        <div className='title_bertocchini title_back'>
          <h2 className='titleh2_bertocchini'> MON 
          <br/>
          PROFIL</h2>
        </div>
      </div>
      <div className='wildside_bertocchini'>
        <div className='title_bertocchini title_back_wild'>
          <h2 className='titleh2_bertocchini'> MON
          <br/>
          COTE
          <br/>
          WILD</h2>
        </div>
        <div className='text_container_bertocchini'>
          <p className='text_bertocchini' dangerouslySetInnerHTML={createMarkup(user.wilder_side)}></p>
        </div>
      </div>  
    </div>


    <div className='CVbutton_container_bertocchini'>
       <a href={user.cv} className='CVbutton_bertocchini' target='_blank'> CV </a>
    </div>

    

    <div className='footer_bertocchini_container'>
      <div className='footer_text_bertocchini'>
      Retrouvez moi sur :
      </div>
      <div className='reseau_icon_bertocchini'>
        <a href='mailto:{user.email}'target='_blank'><img className='mail_bertocchini' src={mail} /></a>
        <a href={user.github} target="_blank"><img className='github_bertocchini' src={github} /></a>
        <a href={user.linkedin} target='_blank'><img className='linkdin_bertocchini' src={linkedin} /></a>
      </div>
    </div>

  </div>
  
    )
  }
}

function createMarkup(stringyfiedHtml) {
  return {__html: stringyfiedHtml};
}

