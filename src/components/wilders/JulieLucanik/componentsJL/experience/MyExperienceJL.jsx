import React from 'react';
import './MyExperienceJl.css';


const MyExperienceJL = ({bio, createMarkup}) => {
    return (
        <div className="experience-containerJL" >
            <div className="parcourJL">
                <div className="icon-parcours">
                    <span>  ...  </span>
                    <i className="fas fa-walking"></i>
                </div>
                <h2>Mon Parcours</h2>
                <p dangerouslySetInnerHTML={createMarkup(bio)}></p>
            </div>
        </div>
    )
}

export default MyExperienceJL;
