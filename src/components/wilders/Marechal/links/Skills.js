import React, {Component} from 'react';
import './Skills.scss';

class Skills extends Component{

render(){
return(
    <div className="Skills">
                <h2>Compétences</h2>
    <div className="SkillsBox">
        <section className="Comp">
                <ul>
                    <h3>Développeuse Full-Stack</h3>
                    <li>React</li>
                    <li>NodeJs</li>
                    <li>Javascript</li>
                    <li>SQL</li>
                    <li>Git</li>
                </ul>
        </section>
        <section className="Tools">
                <ul>
                    <h3>Avec quels outils ?</h3>
                    <li>Méthode Agile / Scrum</li>
                    <li>GitHub</li>
                    <li>Trello</li>
                    <li>Visual Studio Code / Atom</li>
                    <li>CodePen / CodeSandBox</li>
                </ul>
            </section>
            </div>
    </div>
)
}
}
export default Skills;