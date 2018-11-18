import React, { Component } from 'react'
import Spinner from '../../Spinner';
import 'semantic-ui-css/semantic.min.css';
import './RebeccaSenechal.scss'

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
    let linkedin = "linkedin.com/in/rebeccasenechal"
    if (!userFetched) {
      return <div className="container spinnerContainer"><Spinner /></div>
    }
    return (
      <div>

        <div className="cvContainer" >
          <div className="monMatricule" id="top">          
            <img src={user.photo} className="cvpicture" alt="visage" />
            <h1>{`${user.firstname} ${user.lastname}`}</h1>
            <p>{user.email}</p>
            <p>{user.phone}</p>
            <a className="lienCv" href={user.cv}>Télécharger mon CV</a>
            <span className="icones">
                <a href={user.github} target="_blank" rel="noopener noreferrer"><i class="large github basic icon"></i></a>
                <a href={user.linkedin} target="_blank" rel="noopener noreferrer"><i class="large linkedin basic icon"></i></a>
            </span>
          </div>

          <div dangerouslySetInnerHTML={createMarkup(user.bio)} className="cvbio"></div>
          <div dangerouslySetInnerHTML={createMarkup(user.wilder_side)} className="cvwild"></div>
          <a href="#top"><i class="huge arrow circle up icon"></i></a>
              
        </div>
        
      </div>
    )
  }


}
function createMarkup(stringyfiedHtml) {
  return { __html: stringyfiedHtml };
}


