/**
 * Created by ekeu on 19/02/17.
 */
import React from 'react';
import getNames from './utilities.js';

const Services = ({services, speakers}) => {
    return (
        <section>
            <h2 className="section-heading">Services</h2>
            <div>
                <table>
                    <caption><h3>Sundays</h3> Service starts at 6:30pm</caption>
                    <tbody>
                    {services.sunday.map(
                        (service, i) => {
                            return(
                                <tr key={i}>
                                    <td>{service.date}</td>
                                    <td>{getNames(service.speakerIDs, speakers)}</td>
                                </tr>
                            );
                        }
                    )}
                    </tbody>
                </table>
            </div>

            <div>
                <table>
                    <caption><h3>Wednesdays</h3> Service starts at 7:30pm</caption>
                    <tbody>
                    {services.wednesday.map(
                        (service, i) => {
                            return(
                                <tr key={i}>
                                    <td>{service.date}</td>
                                    <td>{getNames(service.speakerIDs, speakers)}</td>
                                </tr>
                            );
                        }
                    )}
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default Services;
