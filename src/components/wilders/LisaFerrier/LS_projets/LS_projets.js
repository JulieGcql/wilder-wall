import React, { Component } from 'react'
import { Card, Icon, Image, Button } from 'semantic-ui-react'
import projetcineasta from './projetcineasta.gif'
import logoterroirbioetnaturel from './logoterroirbioetnaturel.jpg'
import './LS_project.css'

import { Row, Col } from 'reactstrap';

export default class LS_projets extends Component {
  render() {
    return (
      <Row>
        <div className="lsenglobeprojets">
          <Col>
            <Card>
              <Image src={projetcineasta} size='medium' />
              <Card.Content>
                <Card.Header>Cineasta</Card.Header>
                <Card.Meta>
                  <span className='date'>Projet fictif</span>
                </Card.Meta>
                <Card.Description>
                  • Objectif : réaliser un site web dynamique (WebApp) qui ira récupérer les infos d’une api qui elle même,
           récupère et référence les dernières sorties cinéma avec une fonction de recherche par titre<br />
                  • Environnement technique : React.js , JS / CSS, Git / GitHub, Heroku <br />
                  <a className="lsliencineasta" href="https://guarded-atoll-35875.herokuapp.com/"><Button className="lsbuttonlien" content='Voir ici' /></a>
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <a>
                  <Icon name='user' />
                  Groupe de 4 personnes
                </a>
              </Card.Content>
            </Card>
          </Col>

          <Col>
            <Card>
              <Image src={logoterroirbioetnaturel} size='medium' />
              <Card.Content>
                <Card.Header>Terroir Bio et Naturel</Card.Header>
                <Card.Meta>
                  <span className='date'>Projet client</span>
                </Card.Meta>
                <Card.Description>Description à venir</Card.Description>
              </Card.Content>
              <Card.Content extra>
                <a>
                  <Icon name='user' />
                  Groupe de 4 personnes
                </a>
              </Card.Content>
            </Card>
          </Col>
        </div>
      </Row>
    )
  }
}
