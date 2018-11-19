import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import ls_moi from './ls_moi.JPG';
import './LS_apropos.css';
import LS_barnav from '../LS_navbar/LS_navbar'


export default class LS_apropos extends Component {
    render() {
        return (
            <Row>
                <div className="lscentrer">
                    <Col md={4}>
                        <div className="lsblockpropos">
                            <p className="lstitre">A propos</p>
                            <img className="lsmoi" src={ls_moi} />
                            <p className="lisaferrier">Lisa Ferrier</p>
                            <div className="lsenglobetext">
                                <i class="birthday icon" />
                                <p className="lstextpropos">20 ans</p>
                                <br />
                                <i class="location arrow icon" />
                                <a href="https://tinyurl.com/y8fywal4" className="lsmail">Aix-en-Provence</a>
                                <br />
                                <i class="phone icon" />
                                <p className="lstextpropos">06 43 54 52 28</p>
                                <br />
                                <i class="mail icon" />
                                <a className="lsmail" href="mailto:lisaferrier@outlook.com">lisaferrier@outlook.com</a>
                                <br />
                            </div>
                            <div className="lsicon">
                                <a className="lsiconebas" href="https://www.linkedin.com/in/ferrierlisa/">
                                    <i  class="huge linkedin icon" />
                                </a>
                                <a className="lsiconebas" href="https://github.com/lisaferrier">
                                    <i class="huge github square icon" />
                                </a>
                            </div>
                        </div>
                    </Col>
                </div>
            </Row>
        )
    }
}
