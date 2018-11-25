import React from 'react';
import cine from '../../cineasta.png'
import wildo from '../../wildoCoda.png'
import fume from '../../poisson.png'
import logo from '../../logoWild.png'
import './BodyAA.css'

const BodyAA = ({ firstname, lastname, photo, monCv, bio, wild }) => {

  return (
    <div className="containerBodyAlex"  >
      <div className="titleAlexandra">
        <h1 className="myTitleAlex">{firstname} {lastname}</h1>
        <p className="subtitleAlex">Développeuse Web Junior React / Node JS</p>
        <a className="linkAlex" href={monCv} >Telechargez mon CV</a>
      </div>

      <img className="myPhotoAlex" alt="myPhoto" src={photo} />

      <div className="mesOutilsAlex">
        <p className="titleOutilsAlex">Mes Outils et compétences</p>
        <i className="fab fa-react OutilsAlex"><span className="textOutilsAlex"><br />
          React</span>
        </i>
        <i className="fab fa-node-js OutilsAlex"><span className="textOutilsAlex"><br />
          Node JS</span>
        </i>
        <i className="fab fa-js OutilsAlex"><span className="textOutilsAlex"><br />
          Javascript</span>
        </i>
        <i className="fab fa-github OutilsAlex"><span className="textOutilsAlex"><br />
          GitFlow</span>
        </i>
        <i className="fab fa-linux OutilsAlex"><span className="textOutilsAlex"><br />
          Ubuntu/unix/Linux</span>
        </i>
      </div>

      <div className="monParcoursAlex" >
        <p className="monParcoursTitleAlex">Un peu de moi et mon parcours</p>
        <p className="monParcoursTextAlex" dangerouslySetInnerHTML={createMarkup(bio)}></p>
      </div>

      <div className="monCoteWildAlex" >
        <p className="monCoteTitleAlex">Mon côté WILD</p>
        <p className="monCoteTextAlex" dangerouslySetInnerHTML={createMarkup(wild)}></p>
        <img className="myLogoAlex" alt="myWild" src={logo} />
      </div>

      <div className="ProjetsAlex">
        <div className="ProjAlex1">
          <img className="cineAlex" alt="cine" src={cine} />
          <p className="projDescription">J'ai participé au développement  du site web responsive des sorties cinéma,
            Utilisation  API  The movie Data base ,  Affichage de données </p>
          <a className="linksAlex" href="https://guarded-atoll-35875.herokuapp.com ">CINEASTA</a>
        </div>

        <div className="ProjAlex2">
          <img className="wildoAlex" alt="wildo" src={wildo} />
          <p className="projDescription">J'ai fait partie du développement d'un application Web pour les touristes <br />
            que visitent le quartier du Panier </p>
        </div>

        <div className="ProjAlex3">
          <img className="fumeAlex" alt="fume" src={fume} />
          <p className="projDescription">Actellement j'ai fait partie du développement de l'application Web  Le poulpe qui fume, <br />
            site Web  persistant  et dynamique </p>

        </div>
      </div>


    </div>

  )
}

function createMarkup(stringyfiedHtml) {
  return { __html: stringyfiedHtml };
}

export default BodyAA;
