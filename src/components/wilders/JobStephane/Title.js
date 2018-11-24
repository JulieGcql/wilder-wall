import React, { Component } from 'react'
import { Button } from 'reactstrap';
class Title extends Component {
    render () {
        return (
            <div className="title">
                    <h3>{this.props.title}</h3>

            </div>
        )
    }
}

export default Title