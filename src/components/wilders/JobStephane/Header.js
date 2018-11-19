import React, { Component } from 'react'
import { Button } from 'reactstrap';

import "./JobStephane.css"


class Header extends Component {
    render () {
        return (
           <header className="header_wild">
                <h1 className="p30">{`Bonjour, je m'appelle ${this.props.firstname}`} </h1>
                <h1 className="p30">Développeur FullStack Junior: ReactJS , Redux, 🔥 NodeJS </h1>
                <h4 className="p30">
                    <a href={this.props.linkedin}>Linkedin</a></h4>
                <h4 className="p30"><a href={this.props.github}>Github</a></h4>
                <h4 className="p30">07.71.58.27.43</h4>
               <a id ="photos_profile" href="https://drive.google.com/open?id=1HXEfZsR0HRJ6IwyzkVW11rwm2UiiS9_l"><Button className="p30 ombre_bleu" color="primary">Télécharger mon cv</Button></a>

           </header>
        )
    }
}

export default Header