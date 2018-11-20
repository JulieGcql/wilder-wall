import React, { Component } from 'react'
import { Col, Row } from 'reactstrap';
import './LS_navbar.scss';
import { NavLink } from 'react-router-dom';
import Spinner from '../../../Spinner';
const BASE_URL = "https://peaceful-cliffs-33252.herokuapp.com/api/v1/wilders"
const USERNAME = "lisa-ferrier"


export default class LS_navbar extends Component {
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
            <nav className="lsnavbar">
                <ul>
                    <li className="lsli">
                        <NavLink
                            to="/wilders/lisa-ferrier/"
                            activeStyle={{
                            }}>
                        Bio
                        </NavLink>
                    </li>
                    <li className="lsli">
                        <NavLink
                            to="/wilders/lisa-ferrier/projets"
                            activeStyle={{
                            }}>
                        Projets
                        </NavLink>
                    </li>
                    <li className="lsli">
                        <NavLink
                            to="/wilders/lisa-ferrier/photos"
                            activeStyle={{
                            }}>
                        Photos
                        </NavLink>
                    </li>   
                    <li className="lsli">
                        <a className="cvLisa" href={user.cv} data-tooltip="Voir mon C.V. pdf" data-position="top right">C.V.</a>
                    </li>
                </ul>
            </nav>
        )
    }
}
