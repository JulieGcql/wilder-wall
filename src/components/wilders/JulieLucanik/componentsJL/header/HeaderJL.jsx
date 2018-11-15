import React from 'react';
import myFace from './face.jpg';
import Background from './bgJulie.png';
import './headerjl.css'
import IdentityCardJL from './IdentityCard';

const HeaderJL = ({lastname, firstname, cv, phone, email, github, linkedin}) => {
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
            <IdentityCardJL
                phone={phone} 
                email={email} 
                github={github}
                linkedin={linkedin}
            />
        </div>
    )
}

export default HeaderJL;