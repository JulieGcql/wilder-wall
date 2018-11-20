import React, { Component } from 'react';
import './LisaFerrier.scss';
import Spinner from '../../Spinner';
import { Container, Col, Row } from 'reactstrap';
import LS_navbar from './LS_navbar/LS_navbar'
import LS_home from './LS_home/LS_home'
import LS_projets from './LS_projets/LS_projets';
import LS_apropos from './LS_apropos/LS_apropos'
import LS_photos from './LS_photos/LS_photos'
import { Route, BrowserRouter, Switch } from 'react-router-dom';
const BASE_URL = "https://peaceful-cliffs-33252.herokuapp.com/api/v1/wilders"
const USERNAME = "lisa-ferrier"

const items = [
    {
        src: 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa1d%20text%20%7B%20fill%3A%23555%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa1d%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22285.921875%22%20y%3D%22218.3%22%3EFirst%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
    },
    {
        src: 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa20%20text%20%7B%20fill%3A%23444%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa20%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23666%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22247.3203125%22%20y%3D%22218.3%22%3ESecond%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
    },
    {
        src: 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa21%20text%20%7B%20fill%3A%23333%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa21%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23555%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22277%22%20y%3D%22218.3%22%3EThird%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
    }
];

export default class LisaFerrier extends Component {
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

            <BrowserRouter>
                <div className="lsback">
                    <Container>
                        <Row>
                            <Col sm="4">
                                <LS_apropos />
                            </Col>
                            <Col sm="8">
                                <Row>
                                    <LS_navbar />
                                </Row>
                                <Row>
                                    <Switch>
                                        <Route exact path="/wilders/lisa-ferrier/" component={LS_home} />
                                        <Route exact path="/wilders/lisa-ferrier/projets" component={LS_projets} />
                                        <Route exact path="/wilders/lisa-ferrier/photos" component={LS_photos} />
                                    </Switch>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </BrowserRouter >
        )
    }
}

function createMarkup(stringyfiedHtml) {
    return { __html: stringyfiedHtml };
}

