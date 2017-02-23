/**
 * Created by ekeu on 22/02/17.
 */
import React from 'react';

let getNames = (ids, speakers) => {
    let names = [];
    ids.forEach((id) =>{
        if (!speakers[id].linkable) {
            names.push(<span>{speakers[id].firstname + ' ' + speakers[id].lastname}</span>);
        } else {
            names.push(<a href="#">{speakers[id].firstname + ' ' + speakers[id].lastname}</a>);
        }
    });

    if (names.length === 0) {
        return 'Various'
    } else if (names.length === 1){
        return names[0];
    } else {
        return (
            <div>
                {names.map((name, i) => {
                    if (i < names.length-2) {
                        return <span>{name}, </span>;
                    } else if (i === names.length-2){
                        return <span>{name} & </span>;
                    } else {
                        return name;
                    }
                })}
            </div>);
    }
};

export default getNames;