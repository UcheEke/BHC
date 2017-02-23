/**
 * Created by ekeu on 21/02/17.
 */
import React from 'react';

/*
Event format:
 title : 'Psychic Saturday (Morning of Readings)',
 day : 'Saturday',
 date : '4th February',
 time : '10:00am',
 entry : '£12',
 speaker : 'Various',
 speakerID : 1,
 description: 'Our once a month Saturday morning of readings. Readings are £12 for 20 mins with tea and coffee provided afterwards'
 */

const Event = ({event, speaker}) => {
    return (
        <section>
            <h4>Next {event.title}</h4>
            <table>
                <tbody>
                    <tr>
                        <td>Date:</td>
                        <td>{event.day}&nbsp;{event.date}</td>
                    </tr>
                    <tr>
                        <td>Time:</td>
                        <td>{event.time}</td>
                    </tr>
                    <tr>
                        <td>Entry:</td>
                        <td>{event.entry}</td>
                    </tr>
                    <tr>
                        <td>Hosted by:</td>
                        <td>{speaker}</td>
                    </tr>
                </tbody>
            </table>
            <p>{event.description}</p>
        </section>
    );
};

export default Event;
