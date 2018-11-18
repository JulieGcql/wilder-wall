import React from 'react';
import background from '../../cubes.jpg'
import cine from '../../cineasta.png'
import wildo from '../../wildoCoda.png'
import './BodyAA.css'


const BodyAA = ({ firstname, lastname, photo, monCv, bio, wild }) => {

  return (
    <div className="containerBody" style={{ backgroundImage: `url(${background})` }}>

      <div className="titleAlexandra">
        <h1>{firstname} {lastname}</h1>
        <p className="subtitle">Développeuse Web Junior React / Node JS</p>
      </div>

      <img className="myPhoto" alt="myPhoto" src={photo} />

      <div className="mesOutils">
        <p className="titleOutils">Mes Outils</p>
        <i class="fab fa-react"><br/>React</i>
        <i class="fab fa-node-js"><br/>Node JS</i>
        <i class="fab fa-js"><br/>Javascript</i>
        <i class="fab fa-github"><br/>GitFlow</i>
        <i class="fab fa-linux"><br/>Ubuntu/unix/Linux</i>
      </div>

      <div className="monParcours" dangerouslySetInnerHTML={createMarkup(bio)}>
      </div>

      <div className="monCoteWild" dangerouslySetInnerHTML={createMarkup(wild)}>
      </div>

      <div className="Projets">
        <img className="cine" alt="cine" src={cine} />
        <img className="wildo" alt="wildo" src={wildo} />
        <div className="project3">
          <i class="fas fa-wrench"></i>
          <p>Prochainement Application Web "LE POULPE QUI FUME"</p>

        </div>
      </div>
      <a href={monCv} className="cvAA">Telechargez mon CV</a>
    </div>


  )
}
function createMarkup(stringyfiedHtml) {
  return { __html: stringyfiedHtml };
}

export default BodyAA;
