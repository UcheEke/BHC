/**
 * Created by ekeu on 19/02/17.
 */
import React from 'react';


const Landing = ({ sgreet }) => {
    return (
        <div>
            <h1 id="main-title">Welcome to Barnes Healing Church</h1>
            <div className="images">
            <img src={require('../images/Churchnoticeboard.jpg')} alt="Barnes Healing Church Notice Board" className="img-rounded"/>
            </div>
            <div id="special_greetings">
                <p>
                    <em>{ sgreet }</em>
                </p>
            </div>
        </div>
    );
};

export default Landing;