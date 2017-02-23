/**
 * Created by ekeu on 19/02/17.
 */
import React from 'react';

const AboutUs = () => {
    return (
        <section id="about_us">
            <h2 className="section-heading">About Us</h2>
            <p>We are a beautiful Spiritualist church in Barnes, Southwest London located between 77-79 White Hart Lane, Barnes, London. SW13 0QA
                (between the level crossing and 'The Treehouse' pub), just a few minutes walk from Barnes Bridge railway station
                with several regular bus routes stopping nearby.</p>

            <div className="images">
                <img src={require('../images/insidechurch2.jpeg')} alt="Inside Barnes Healing Church" className="img-rounded" />
            </div>

            <section id="mediumship">
                <h4>Mediumship</h4>
                <p>
                    This beautiful church hosts some wonderful nights of mediumship, a wide range of excellent workshops,
                    healing and much more. We offer two evenings of Mediumship each week:
                </p>
                <ul>
                    <li>Every Sunday evening at 6:30pm. A traditional Spiritualist Service with hymns, a Healing invocation and prayer
                        and finishing with a wonderful demonstration of Mediumship.</li>
                    <li>Every Wednesdays at 7:30pm with a small entrance fee of £3. We open with a prayer and an uplifting song
                        before an extended demonstration by our guest Medium.</li>
                </ul>

                <p>Please see our listed <a href="#services">Services</a> for further details</p>
            </section>

            <section id="healing">
                <h4>Healing</h4>
                <p>
                    We offer Healing on both Tuesday evenings and Thursday lunchtimes. Please just turn up as there is no need to book.
                    Healing is a beautiful and relaxing experience and we have a wonderful team of Healers and volunteers.
                </p>
                <p>
                    Tuesday evening is our Healing Circle, a time to sit in the gentle, healing peace of the church while our healers quietly work.
                    It is between 7pm and 8pm and you can stay for as long or as short a time as you would like during this hour with time
                    for a cup of tea afterwards.
                </p>

                <p>
                    On Thursdays between 10:30am and 1pm we offer one-to-one healing where you are invited to either sit comfortably
                    or lay down on one of our healing couches while one of our trained healers works with you. If you have experienced
                    healing before you will know how wonderful and relaxing an experience it can be and if you are new to
                    it then at some point please allow yourself this gentle gift.
                </p>
                <p> There is no fee but as we run our Healing sessions on goodwill and donations any financial gesture is greatly appreciated. We suggest a donation
                    of £5 for Thursday one-to-one healing which also allows the church to offer free Healing to those in financial need.
                </p>

                <p>For more information on healing, please go to our <a href="healing.html#main">healing</a> section</p>
            </section>

            <section>
                <h4>Other Activities</h4>
                <p>
                    The church also offers a range of development circles, workshops, open platforms and a host of other
                    activities. We are registered to carry out weddings, to conduct Baby naming's and much more. We have
                    coffee mornings, fetes and other special events all arranged and staffed by the friends and volunteers
                    who make this place so special and so loved.
                </p>

                <p>
                    People always seem to find this beautiful place at the perfect point in their lives and
                    we look forward to seeing you here soon!
                </p>
            </section>
        </section>
    );
};

export default AboutUs;