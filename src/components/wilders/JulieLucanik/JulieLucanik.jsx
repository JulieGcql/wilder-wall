import React, {Component} from 'react';
import './JulieLucanik.css';
import Spinner from '../../Spinner';
import HeaderJL from './componentsJL/header/HeaderJL';
import IdentityCardJL from './componentsJL/IdentityCard';
import MyExperienceJL from './componentsJL/MyExperienceJL';


class JulieLucanik extends Component {
    constructor(props) {
        super(props)
        this.state = {
            url: "https://peaceful-cliffs-33252.herokuapp.com/api/v1/wilders",
            usernameURL: "julie-lucanik",
            user: {},
            userFetched: false
        }
    }

    componentDidMount(){
        fetch(`${this.state.url}/${this.state.usernameURL}`)
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
            <div className="container-jl">
            {console.log(this.state.user)}

            <HeaderJL 
                firstname={user.firstname} 
                lastname={user.lastname} 
                cv={user.cv}
            />

            < IdentityCardJL 
                phone={user.phone} 
                email={user.email} 
                github={user.github}
                linkedin={user.linkedin}
            />

            <MyExperienceJL bio={user.bio} />

            </div>
        )
    }
}

export default JulieLucanik;