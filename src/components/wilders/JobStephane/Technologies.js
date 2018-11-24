import React, { Component } from 'react'
import { Progress } from 'reactstrap';
class Technologies extends Component {
    render () {
        return (
            <div className={this.props.change}>
                <Progress striped color="primary" value="65" >Javascript</Progress>
                <Progress striped color="dark" value="45" >React</Progress>
                <Progress striped color="primary" value="25" >Node JS</Progress>
                <Progress striped color="dark" value="85" >Html</Progress>
                <Progress striped color="primary" value="75" >Css</Progress>
                <Progress striped color="dark" value="85" >Responsive web</Progress>
                <Progress striped color="primary" value="85" >Git</Progress>
                <Progress striped color="dark" value="78" >Bootsrap</Progress>
            </div>
        )
    }
}

export default Technologies