import React, { Component } from 'react';
import Spinner from '../../Spinner';
import './MaximePochet.scss';
import bg from './pictures/bg1.jpg'

const BASE_URL = "https://peaceful-cliffs-33252.herokuapp.com/api/v1/wilders"
const USERNAME = "maxime-pochet"

export default class MaximePochet extends Component {
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
            <div className="PochetMyDescription" style={{backgroundImage: `url(${bg})`}}>
                <img src={user.photo} alt="Ma photo" className="PochetMyPicture" />
                <h1 className="PochetMyName">{`${user.firstname} ${user.lastname}`}<br/>
                Développeur Web Junior React / Node JS</h1>
                <section className="PochetContactMe">
                </section>
                <section className="PochetMyPresentation">
                    <div className="PochetMyWilderSide" dangerouslySetInnerHTML={createMarkup(user.wilder_side)}></div>
                    <br/>
                    <div className="PochetMyBio" dangerouslySetInnerHTML={createMarkup(user.bio)}></div>
                    <a href={user.cv} className="PochetMyCV">Télécharger mon CV !</a>
                </section>
            </div>
        )
    }
}

function createMarkup(stringyfiedHtml) {
    return {__html: stringyfiedHtml};
}