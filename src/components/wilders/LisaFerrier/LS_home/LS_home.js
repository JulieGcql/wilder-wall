import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import { Header, Icon, Image, Button } from 'semantic-ui-react'
import './LS_home.css';

export default class LS_home extends Component {
    render() {
        return (
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
                            <p className="lsphome"><Header as='h4'>
                                <Icon name='sitemap' />
                                <Header.Content>Compétences générales :</Header.Content>
                            </Header>
                                <Header size='tiny'><span className="lspoint">•</span> Langues</Header>
                                - Anglais : technique
                                <Header size='tiny'><span className="lspoint">•</span> Pack Office :</Header>
                                - Word, PowerPoint, Publisher
                                <Header size='tiny'><span className="lspoint">•</span> Gestion de projets :</Header>
                                - Méthodes agiles : SCRUM<br />
                                - Trello
                            </p>
                        </div>
                        <div class="column">
                            <p className="lsphome">
                                <Header as='h4'>
                                    <Icon name='terminal' />
                                    <Header.Content>Compétences informatiques :</Header.Content>
                                </Header>
                                <Header size='tiny'><span className="lspoint">•</span> Front-end :</Header>
                                - HTML5, CSS3, Bootstrap<br />
                                - JavaScript (débutante)<br />
                                - React.js<br />
                                - Node.js
                                <Header size='tiny'><span className="lspoint">•</span> Back-end :</Header>
                                - mySql
                                <Header size='tiny'><span className="lspoint">•</span> Editeurs de texte :</Header>
                                - Visual Studio Code<br />
                                - Sublim Text
                                <Header size='tiny'><span className="lspoint">•</span> Système / OS :</Header>
                                - Ubuntu<br />
                                - Windows
                                <Header size='tiny'><span className="lspoint">•</span> Outils :</Header>
                                - Git / GitHub<br />
                                - Kraken
                            </p>
                        </div>
                    </div>
                    <div class="ui vertical divider">
                        &
                        </div>
                </div>
            </div>
        )
    }
}