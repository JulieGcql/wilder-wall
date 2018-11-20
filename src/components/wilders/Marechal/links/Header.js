import React, {Component} from 'react';
import './Header.scss';
import photo from './Clemence.png';
import logo from './../../../../logo.svg';
import node from '../Node.svg';
class Header extends Component{

render(){
return(
    <div className="Header">
        <h1>Développeuse Web et Mobile Junior</h1>
        <div className="HeaderBlock">
            <img className="Pic" src={photo} alt="profil" />
            <div className="HeaderContent">
                <h2>{`${this.props.firstname} ${this.props.lastname}`}</h2>
                <br />
                <br />
                <h3>React et NodeJs</h3>
            </div>
            <a href={this.props.cv} target="blank">Télécharger mon CV !</a>
        </div>
        <section className="bio">
        <div dangerouslySetInnerHTML={createMarkup(this.props.bio)}></div>
        </section>
    </div>
)
}
}

export default Header;
function createMarkup(stringyfiedHtml) {
    return {__html: stringyfiedHtml};
}
