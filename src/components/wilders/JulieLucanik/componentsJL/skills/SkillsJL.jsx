import React from 'react';
import Competences from './logos.png';
import './skillsJL.css';

const SkillsJL = () => {
    return (
        <div className="container-languagesJL">
            <div className="container-project">
            <h3><i className="fas fa-desktop"></i> Projets durant mes Formations</h3>
            <p> <i className="fas fa-code"></i> Site indéxant tous les <a href="https://project-superheroes.herokuapp.com"> Superhéros</a> <br /> Utilisation de l'API SuperHeroe API (React, SCSS) </p>
            <p> <i className="fas fa-code"></i> Site <a href="https://clemarech.github.io/projet1/">“Les Bons Plans du Panier”</a> (HTML/CSS, Javascript) </p>
            <p> <i className="fas fa-code"></i> Réalisation d’une maquette interactive d’un logiciel métier en collaboration avec <strong>Thalès</strong> (HTML/CSS, jQuery) </p>
            
            </div>

            <div className="container-skills">
                <h3><i className="fas fa-terminal"></i> Compétences Techniques</h3>
                <div className="img-skills">
                    <img src={Competences}/>
                </div>
            </div>
        </div>
    )
} 

export default SkillsJL;