import React, { Component } from 'react'
import Spinner from '../../Spinner';
import Header from './links/Header';
import Skills from './links/Skills';
import Wild from './links/Wild';
import Footer from './links/Footer';
import './links/Marechal.scss';

export default class Marechal extends Component {
  constructor(props){
    super(props);
    this.state = {
      url: "https://peaceful-cliffs-33252.herokuapp.com/api/v1/wilders",
      userName: "clemence-marechal",
      user: {},
      userFetched: false
    }
  }
  componentDidMount(){
    let url = `${this.state.url}/${this.state.userName}`
    console.log(url)
    fetch(url)
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
      <div className="cvContainer">
      {console.log(this.state.user)}
        {/* <img src={user.photo} alt="profil"/> */}

        <Header 
        firstname={this.state.user.firstname}
        lastname={this.state.user.lastname}
        bio={this.state.user.bio}
        cv={this.state.user.cv}
        />
        <Skills
        />
        <Wild 
        wild={this.state.user.wilder_side}
        />
        <Footer 
        />
      </div>
    )
  }
}
