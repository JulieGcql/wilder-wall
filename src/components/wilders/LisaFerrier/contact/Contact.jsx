import React, { Component } from 'react'
import mailto from './mailto.png';
import place from './place.png';
import phone from './phone.png';
import linkedin from './linkedin.png'
import './Contact.scss';
import Spinner from '../../../Spinner';
import { Col, Button, Row } from 'reactstrap';
const BASE_URL = "https://peaceful-cliffs-33252.herokuapp.com/api/v1/wilders"
const USERNAME = "lisa-ferrier"

export default class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {},
            userFetched: false
        }
    }

    componentDidMount() {
        fetch(`${BASE_URL}/${USERNAME}`)
            .then((response) => response.json())
            .then((data) => this.setState({ user: data.user, userFetched: true }))
            .catch((error) => console.log(error))
    }

    render() {
        const { user, userFetched } = this.state;
        if (!userFetched) {
            return <div className="container spinnerContainer"><Spinner /></div>
        }
        return (

        <div className="contactPouet">
            <h1 id="contact">contact</h1>
                <Row className="rowContact">
                    <div className="contactCard">
                        <Col sm="2" xs="4" className="contactBack">
                            <a href="mailto:lisaferrier@outlook.com"><img className="contactPicture" src={mailto} alt='mail' />
                                <p className="contactLisa">lisaferrier@outlook.com</p></a>
                        </Col>
                        <Col sm="2" xs="4" className="contactBack">
                            <img className="contactPicture" src={place} alt='place' />
                            <p className="contactLisa">Aix-en-Provence, 13100</p>
                        </Col>
                        <Col sm="2" xs="4" className="contactBack">
                            <img className="contactPicture" src={phone} alt='phone' />
                            <p className="contactLisa">06 43 54 52 28</p>
                        </Col>
                    </div>
                    <Col sm="12">
                        <Button>
                            <a className="cvLisa" href={user.cv}>Télécharger mon CV !</a>
                        </Button>
                    </Col>
                </Row>

        </div>
        )
    }
}
