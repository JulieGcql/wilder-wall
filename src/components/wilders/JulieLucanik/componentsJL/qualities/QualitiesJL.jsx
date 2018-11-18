import React from 'react';
import './QualitiesJL.css';

const QualitiesJL = () => {
    return (
        <div className="container-qualitiesJL">
            <ul className="ListJL">
                <li className="li-jl">
                    <i className="fas fa-code"></i> <br /> Passionnée
                </li>
                <li className="li-jl">
                    <i className="fas fa-users"></i> <br /> Esprit d'équipe
                </li>
                <li className="li-jl"> 
                    <i className="fas fa-lightbulb"></i> <br />Créative
                </li>
                <li className="li-jl">
                    <i className="fas fa-desktop"></i> <br />Autonome
                </li>
            </ul>
        </div>
    )
}

export default QualitiesJL;