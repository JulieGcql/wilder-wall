import React from 'react';
import './IdentityCard.css';


const IdentityCardJL = ({phone, email, github, linkedin}) => {
    return (
        <React.Fragment>
            <ul className="identity-listJl">
                <div className="little-containers-cards">
                    <li><i className="fas fa-map-marker-alt"></i> Mobilité Sud de la France</li>
                    <li><i className="fas fa-birthday-cake"></i> 13 Mai 1994 </li>
                </div >
                <div className="little-containers-cards">
                    <li><i className="fas fa-phone"></i> {phone} </li>
                    <li><i className="far fa-envelope"></i> {email} </li>
                </div>
                <div className="little-containers-cards">
                <li><i className="fab fa-github"></i> <a href={github}>Jujuskova</a> </li>
                <li><i className="fab fa-linkedin"></i> <a href={linkedin}>Julie Lucanik</a> </li>
                </div>
            </ul>
        </React.Fragment>
    )
} 

export default IdentityCardJL;