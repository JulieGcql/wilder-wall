import React from 'react';
import Background from './test.png';
import myFace from './face.jpg';
import './headerjl.css'

const HeaderJL = ({lastname, firstname, cv}) => {
    return (
        <div>
            <div className="header-jl" style={{backgroundImage: `url(${Background})`}}>
                <div>
                    <img src={myFace} alt="Julie Lucanik portrait" className="myFace"/>
                <h1>{firstname} {lastname}</h1>
                <h3>Développeuse Fullstack Junior <span className="subtitle-jl">(React/NodeJS)</span></h3>
                <a href={cv} className="CVjl">Mon CV </a>
                </div>
            </div>
                <ul className="ListJL">
                    <li className="li-jl">
                    <i className="fas fa-code"></i> <br /> Passionnée
                    </li>
                    <li className="li-jl">
                        <i className="fas fa-users"></i> <br /> Esprit d'équipe
                    </li>
                    <li className="li-jl"> <i className="fas fa-lightbulb"></i> <br />Créative</li>
                    <li className="li-jl"> <i className="fas fa-desktop"></i> <br />Autonome</li>
                </ul>
        </div>
    )
}

export default HeaderJL;