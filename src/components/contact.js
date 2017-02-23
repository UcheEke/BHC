/**
 * Created by ekeu on 19/02/17.
 */
import React from 'react';

const Contact = () => {
    return (
        <section id="main">
            <h2 className="section-heading">Contact Us</h2>
            <br/>You can find us at:
                <div className="address">
                    Barnes Healing Church,<br/>
                    b/w 77-79 White Hart Lane,<br/>
                    Barnes,<br/>
                    London <br/>
                    SW13 0QA
                </div>
                (On the map <a href="https://www.google.co.uk/maps/place/Spiritualist+Church+%26+Healing+Centre/@51.4684546,-0.2547424,20z/data=!4m13!1m7!3m6!1s0x48760ef46eaf73a1:0xa7d26c3706a5c2f0!2sAnchor+House,+77+White+Hart+Ln,+London+SW13+0PW!3b1!8m2!3d51.4684062!4d-0.2542289!3m4!1s0x0:0x146a3bb6a364a54f!8m2!3d51.4685892!4d-0.2544598">here</a>)
                <br/>
                <br/>For general enquiries, please call us on 07581 534028
                <br/>By email, feel free to message us at <a href="mailto:barneshealingchurch@hotmail.co.uk">barneshealingchurch@hotmail.co.uk</a>
                <br/>
                <br/>Please also visit our Facebook group to be kept up to date with events and updates at the church:
                <br/><span><i className="fa fa-facebook-official"></i></span><a href="http://www.facebook.com/barneshealingchurch">Barnes Healing Church</a>
        </section>
    );
};

export default Contact;