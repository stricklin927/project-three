import React from 'react';

function MajorsMap(props) {
    return (
        <div>
            {props.coll.majors.map(major => {
                return (
                <p>{major}</p>
                )
            })}
        </div>
    )
}

export default MajorsMap;