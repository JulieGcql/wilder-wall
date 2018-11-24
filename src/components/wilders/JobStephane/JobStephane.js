import React, { Component } from 'react'
import Header from "./Header";
import "./JobStephane.css"
import Apropos from './Apropos';
import Title from './Title';
import Formation from './Formation';
import Technologies from './Technologies';
import Projet from './Projets';
import ListGroupe from "./ListGroup";
import Carouselle from "./Carouselle";

class JobStephane extends Component {
  state = {
    user:{},
    on:false,
    on1:false
};
    componentDidMount(){
        const USERNAME = "stephane-job";
        fetch (`https://peaceful-cliffs-33252.herokuapp.com/api/v1/wilders/${USERNAME}`)
        .then((response) => response.json())
        .then((data) => this.setState({user: data.user}))
        .catch((error) => console.log(error))
    }
    ghost = () => {
        this.setState({on:!this.state.on})
    };
    ghost1 = () => {
        this.setState({on1:!this.state.on1})
    };
    render () {
        const change = this.state.on ? "light" : "technologies";
        const change1 = this.state.on1 ? "light" : "cardsProjets";
        const {user} = this.state;
        return (
            <div className="wrapper">
                <Header
                    lastname={user.lastname}
                    firstname={user.firstname}
                    linkedin={user.linkedin}
                    github={user.github}
                />

                <Title
                    title="A PROPOS"
                    ghost={()=>this.ghost()}
                />

                <Apropos
                    photo={user.photo}
                    bio={user.bio}
                />

                <Title
                    title="FORMATION"
                    ghost={()=>this.ghost()}
                />

                <Formation/>

                <Title
                    title="Compétences"
                    ghost={()=>this.ghost()}
                />

            <ListGroupe/>

                <Title
                    title="Réalisations"
                    ghost={()=>this.ghost1()}
                />

                <div className={change1}>
                <Projet
                    cardTitle="App météo"
                    img="https://i.pinimg.com/originals/b8/04/81/b80481954f83a63a2c81a4c50571859a.jpg"
                    text="Application météo réalisé avec React"
                    url="https://github.com/darksh3ll/AppMeteoReactV.2"
                />
                 <Projet
                    cardTitle="Api stars wars"
                    img="https://i.pinimg.com/originals/c1/ff/f2/c1fff28a143cc9192e8d5d0f646f5126.jpg"
                    text="Récupération Api Stars wars en react "
                    url="https://wild-star-wars.herokuapp.com"
                />

                 <Projet
                    cardTitle="Calulatrice"
                    text="Calculatrice en javascript utilisant les grid Css"
                    img="http://www.portoalegre.travel/upload/b/42/428540_finance-wallpaper.jpg"
                    url="https://github.com/darksh3ll/calculatrice"
                />

                    <Projet
                        cardTitle="Api Movies"
                        text="Movie database"
                        img="https://cdn.vox-cdn.com/thumbor/iLTPsDuWmoacIGa6iQfiz8uUix0=/0x0:2659x1773/920x613/filters:focal(1118x675:1542x1099)/cdn.vox-cdn.com/uploads/chorus_image/image/57111325/moviesanywhere.0.jpg"
                        url="https://github.com/darksh3ll/OmdbApiReact"
                    />

                    <Projet
                        cardTitle="Chat Box"
                        text="Application forum de discussion"
                        img="http://www.dailymars.net/wp-content/uploads/2015/10/399629064882fc0a4e313ecb5811a0af_large.jpeg"
                        url="https://github.com/darksh3ll/ChatJs"
                    />

                    <Projet
                        cardTitle="Le poulpe qui fume"
                        text="Projet client en cours..."
                        img="https://previews.123rf.com/images/cookamoto/cookamoto1601/cookamoto160100009/51226010-noir-danger-caract%C3%A8res-de-poulpe-de-bande-dessin%C3%A9e-avec-des-tentacules-de-curling-nageant-sous-l-eau-.jpg"
                    />


                </div>
            </div>
        )
    }
}

export default JobStephane