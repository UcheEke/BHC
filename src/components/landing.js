/**
 * Created by ekeu on 19/02/17.
 */
import React from 'react';

const Landing = ({ sgreet }) => {
    return (
        <section>
            <h1 className="main-title text-center">Welcome to Barnes Healing Church</h1>
            <div className="images">
                <img src={require('../images/Churchnoticeboard.jpg')} alt="Barnes Healing Church Notice Board" />
            </div>
            <div>
                <p className="special_greetings text-center">
                    <em>"{ sgreet }"</em>
                </p>
            </div>
        </section>
    );
};

export default Landing;