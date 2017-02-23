/**
 * Created by ekeu on 19/02/17.
 */
import React from 'react';
import Event from './event';
import getNames from './utilities';

const UpcomingEvents = ({events, speakers}) => {
    return (
        <section>
            <h2 className="section-heading">Notices & Upcoming Events</h2>
            {events.map((event, i) => {
                return (
                    <Event key={i} event={event} speaker={getNames(event.speakerIDs, speakers)}/>
                );
            })}
        </section>
    );
};

export default UpcomingEvents;