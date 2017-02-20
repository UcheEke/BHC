/**
 * Created by ekeu on 19/02/17.
 */
import React from 'react';
import '../css/font-awesome.min.css';

const Footer = () => {
    return (
        <div>
            <footer>
                <h4>Barnes Healing Church</h4>
                <small>White Hart Lane, Barnes, London. SW13 0QA</small>
                <p>Email: <a href="mailto:barneshealingchurch@hotmail.co.uk">barneshealingchurch@hotmail.co.uk</a></p>
                <p>For general enquiries please call us on: 07581 534028</p>
                <p>Please also visit our Facebook group to be kept up to date with events and updates at the church:</p>
                <p><span><i className="fa fa-facebook-official"></i></span> <a href="http://www.facebook.com/barneshealingchurch">Barnes Healing Church</a></p>
            </footer>
        </div>
    );
};

export default Footer;
