import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import './LS_home.css';

export default class LS_home extends Component {
    render() {
        return (
            <Row>
                <Col sm={8}>
                    <div className="lslsenglobebio">
                        <span className="lstitrebio" class="ui horizontal divider">Développeuse web et mobile React / NodeJS <br />en formation à la Wild Code School</span>
                        <div className="lsbio">
                            <p>20 ans, actuellement étudiante à la Wild Code School sur le campus de Marseille de septembre 2018 à février 2019,
                            pour prochainement passer le titre professionnel de développeur web et web mobile (Niveau III)</p>
                        </div>
                        <span className="lstitrecompetences" class="ui horizontal divider">Mes compétences</span>
                        <div class="ui segment">
                            <div class="ui two column very relaxed grid">
                                <div class="column">
                                    <p>
                                        Compétences :
                                         <br />
                                        • Langues
                                         <br />
                                        - Anglais : technique
                                     <br />
                                        • Pack Office : Word, PowerPoint, Publisher
                                     <br />
                                        • Gestion de projets :
                                         <br />
                                        - Méthodes agiles : SCRUM
                                        - Trello
                                    </p>
                                </div>
                                <div class="column">
                                    <p>
                                        Compétences informatiques :
                                        <br />
                                        • Front-end :
                                         <br />
                                        - HTML5, CSS3, Bootstrap
                                        - JavaScript (débutante)
                                        - React.js
                                        - Node.js
                                         <br />
                                        • Back-end :
                                         <br />
                                        - mySql
                                             <br />
                                        • Editeurs de texte :
                                         <br />
                                        - Visual Studio Code
                                        - Sublim Text   
                                         <br />
                                        • Système / OS:
                                         <br />
                                        - Ubuntu
                                        - Windows
                                         <br />
                                        • Outils :
                                         <br />
                                        - Git / GitHub
                                        - Kraken (débutante)
                                    </p>
                                </div>
                            </div>
                            <div class="ui vertical divider">
                                et
                             </div>
                        </div>
                    </div>
                </Col>
            </Row>
        )
    }
}

