import React, {Component} from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

class ListGroupe extends Component {
    render() {
        return (
            <div className="BoxListeCompetences">

                <div className="javascript">
                    <h6 className="listtitle">Javascript</h6>
                    <i className="fab fa-js"></i>
                </div>

                <div className="react">
                    <h6 className ="listtitle">React</h6>
                    <i className="fab fa-react"></i>
                </div>

                <div className="git">
                    <h6 className ="listtitle">Git</h6>
                    <i class="fab fa-git-square"></i>
                </div>

                <div className="node">
                    <h6 className="listtitle">Node</h6>
                    <i className="fab fa-node"></i>
                </div>

                <div className="linux">
                    <h6 className="listtitle">Linux</h6>
                    <i className="fab fa-linux"></i>
                </div>

                <div className="html">
                    <h6 className="listtitle">html5</h6>
                    <i className="fab fa-html5"></i>

                </div>

            </div>
        );
    }
}

export default ListGroupe;