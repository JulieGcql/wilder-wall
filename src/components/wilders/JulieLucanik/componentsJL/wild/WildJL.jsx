import React from 'react';
import './wildJL.css';
import image1 from './devv.png'
import logoWild from './logoWild.png'

const WildJL = ({wild}) => {
    return (
        <div className="wild-containerJL" style={{backgroundImage: `url(${image1})`}}>
            <div className="wildJL">
                <a href="https://wildcodeschool.fr/"><img src={logoWild} alt="logoWild" className="logoWild"/></a>
                <h2>Mon côté Wild</h2>
                <p> Please tell me I didn't get old. Anything but old. I was young! Oh... is he grey? Father Christmas. Santa Claus. Or, as I’ve always known him, Jeff. I once spent a hell of a long time trying to get a gobby Australian to Heathrow airport. Thank you, Strax. And if I'm ever in need of advice from a psychotic potato dwarf, you'll certainly be the first to know. Usually called 'The Doctor.' Or 'The Caretaker.' Or 'Get off this planet.' Though, strictly speaking, that probably isn't a name. I know. Dinosaurs! On a spaceship! </p>
            </div>
        </div>
    )
}

export default WildJL;