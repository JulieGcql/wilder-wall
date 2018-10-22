import React, { Component } from 'react';
import Spinner from '../../Spinner';
import './MaximePochet.scss';

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
            <div className="MyDescription" 
            // style={{backgroundImage: `url(${user.photo})`}}
            >
                <img src={user.photo} className="MyPicture" />
                <h1 className="MyName">{`${user.firstname} ${user.lastname}`}<br/>
                Développeur Web Junior React / Node JS</h1>
                <section className="MyPresentation">
                    <div className=""dangerouslySetInnerHTML={createMarkup(user.wilder_side)}></div>
                    <br/>
                    <div dangerouslySetInnerHTML={createMarkup(user.bio)}></div>
                    {/* <a href={user.cv}>Télécharger mon CV !</a> */}
                </section>
            </div>
        )
    }
}

function createMarkup(stringyfiedHtml) {
    return {__html: stringyfiedHtml};
}