/**
 * Created by ekeu on 19/02/17.
 */
import React from 'react';
import '../css/font-awesome.min.css';

const Footer = () => {
    return (
        <div>
            <footer>
                <div className="footer-heading">Barnes Healing Church</div>
                <small>White Hart Lane, Barnes, London. SW13 0QA</small><br/>
                Email: <a href="mailto:barneshealingchurch@hotmail.co.uk">barneshealingchurch@hotmail.co.uk</a><br/>
                For general enquiries please call us on: 07581 534028<br/><br/>
                Please also visit our Facebook group to be kept up to date with events and updates at the church:<br/>
                <span><i className="fa fa-facebook-official"></i></span>&nbsp;<a href="http://www.facebook.com/barneshealingchurch">Barnes Healing Church</a><br/>
            </footer>
        </div>
    );
};

export default Footer;
