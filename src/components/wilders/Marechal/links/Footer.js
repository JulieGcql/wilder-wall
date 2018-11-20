import React, { Component } from 'react'
import './Footer.scss';

export default class Footer extends Component {
render() {
return (
    <div>
        <footer className='Footer'>
            <h3>Projets réalisés</h3>
            <ul>
                <li> <p>Lien vers le projet 2 sur </p><a href="https://project-superheroes.herokuapp.com/" target="blank">les Superhéros</a>
                <p> Appel d'une API et affichage des données</p>
                </li>

                <li> <p>Lien vers le projet du </p><a href="https://hackatombe.herokuapp.com/" target="blank">  Premier Hackaton </a> 
                <p>le 31 octobre en 36h (fonctionne actuellement sur firefox)  </p>
                </li>
                <li> <p>Lien vers le projet 1, sur </p><a href="https://clemarech.github.io/projet1/" target="blank" >  Les bons plans du panier</a></li>
            </ul>
        </footer>
    </div>
)
}
}
