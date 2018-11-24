import React, { Component } from 'react'
import './Wild.scss';
export default class Wild extends Component {
render() {
return (
    <div className="Wild">
    <h2>Wild, c'est à dire ? </h2>
        <div dangerouslySetInnerHTML={createMarkup(this.props.wild)}></div>        
    </div>
)
}
}

function createMarkup(stringyfiedHtml) {
    return {__html: stringyfiedHtml};
}

