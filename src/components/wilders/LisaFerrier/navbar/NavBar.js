import React, { Component } from 'react'
import './NavBar.scss';
import Spinner from '../../../Spinner';
import { Nav, NavItem, NavLink } from 'reactstrap';
const BASE_URL = "https://peaceful-cliffs-33252.herokuapp.com/api/v1/wilders"
const USERNAME = "lisa-ferrier"

export default class NavBar extends Component {
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
            <div>
                <hr />
                <Nav>
                    <NavItem>
                        <NavLink href="#apropos">à propos</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#competence">compétences</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#realisations">réalisations</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#interets">intérêts</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">contact</NavLink>
                    </NavItem>
                </Nav>
                <hr />
            </div>
        )
    }
}
