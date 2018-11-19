import React, { Component} from 'react'
import Spinner from '../../Spinner';
import './TranzerMathias.css'

export default class TranzerMathias extends Component {
    constructor(props){
        super(props);
        this.state = {
          user: {},
          userFetched: false
        }
      }

      componentDidMount(){
        fetch(`https://peaceful-cliffs-33252.herokuapp.com/api/v1/wilders/mathias-tranzer`)
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

        <div className="cvMathiasContainer">
        <div className="reserve">
        <div class="ui horizontal segments">
  <div class="ui segment">
          
    <p>
     <img class="ui medium rounded image" src={user.photo} />

       <p className="nom">{`${user.firstname} ${user.lastname}`}</p>
       <p className="job">Futur développeur web et mobile Node.js, React.js</p>
       </p>
       <div className="boutons">
       <a href={user.cv}><i class="id card icon" title="cv"></i></a>
       <a href={user.linkedin}><i class="linkedin icon"></i></a>
       </div>
   
  </div>

  <div class="ui segment">
    <div>
    <h2 className="titre">Mon parcours</h2>
    <div dangerouslySetInnerHTML={createMarkup(user.bio)} className="bio"></div>
    <h2 className="titre">Mon côté wild</h2>
    <div dangerouslySetInnerHTML={createMarkup(user.wilder_side)} className="wild"></div>
    </div>
  </div>
</div>
          </div>
        </div>
      
          
          
        )
      }
    }
    
    function createMarkup(stringyfiedHtml) {
      return {__html: stringyfiedHtml};
    }
    