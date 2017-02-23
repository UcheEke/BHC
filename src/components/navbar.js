/**
 * Created by ekeu on 19/02/17.
 */
import React from 'react';
import '../css/navbar.css';

const Navbar = () => {
    return (
        <div className="navbar">
            <ul>
                <li><a>Barnes Healing Church</a></li>
                <li className="rhs"><a href="http://www.facebook.com/barneshealingchurch"><span><i className="fa fa-facebook-official"></i></span></a></li>
                <li className="rhs"><a>Contact</a></li>
                <li className="rhs"><a>Private Hire</a></li>
                <li className="rhs"><a>Upcoming Events</a></li>
                <li className="rhs"><a>Services</a></li>
                <li className="rhs"><a>Healing</a></li>
                <li className="rhs"><a>History</a></li>
                <li className="rhs"><a>About Us</a></li>
            </ul>
        </div>
    );
};

export default Navbar;