import React from 'react';
import './wildJL.css';
import image1 from './devv.png'
import logoWild from './logoWild.png'

const WildJL = ({wild, createMarkup}) => {
    return (
        <div className="wild-containerJL" style={{backgroundImage: `url(${image1})`}}>
            <div className="wildJL">
                <a href="https://wildcodeschool.fr/"><img src={logoWild} alt="logoWild" className="logoWild"/></a>
                <h2>Mon côté Wild</h2>
                <p dangerouslySetInnerHTML={createMarkup(wild)}></p>
            </div>
        </div>
    )
}

export default WildJL;