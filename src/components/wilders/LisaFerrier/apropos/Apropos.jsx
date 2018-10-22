import React, { Component } from 'react'
import './Apropos.scss';
import Spinner from '../../../Spinner';
import { Row, Col } from 'reactstrap';
const BASE_URL = "https://peaceful-cliffs-33252.herokuapp.com/api/v1/wilders"
const USERNAME = "lisa-ferrier"

export default class Apropos extends Component {
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
            <Row className="rowLisa">
                <Col sm="4" >

                    <div className="lisaPhoto">
                    <img className="imageLisa" src={user.photo} />
                    </div>
                </Col>
                
                <Col xs="12" sm="8">
                    <div className="apropos">
                        <h1 id="apropos">à propos</h1>
                        <div className="bioLisa" dangerouslySetInnerHTML={createMarkup(user.bio)}></div>
                    </div>
                </Col>
            </Row>
        )
    }
}

function createMarkup(stringyfiedHtml) {
    return { __html: stringyfiedHtml };
}
