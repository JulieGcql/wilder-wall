import React from 'react';
import './IdentityCard.css';


const IdentityCardJL = ({phone, email, github, linkedin}) => {
    return (
        <div className="identity-containerJl">
            <h2>Carte d'identité</h2>
            <ul className="identity-listJl">
                <li><i className="fas fa-map-marker-alt"></i> Mobilité Sud de la France</li>
                <li><i className="fas fa-birthday-cake"></i> 13 Mai 1994 </li>
                <br />
                <li><i className="fas fa-phone"></i> {phone} </li>
                <li><i className="far fa-envelope"></i> {email} </li>
                <br />
                <li><i className="fab fa-github"></i> <a href={github}>Jujuskova</a> </li>
                <li><i className="fab fa-linkedin"></i> <a href={linkedin}>Julie Lucanik</a> </li>
            </ul>
        </div>
    )
} 

export default IdentityCardJL;