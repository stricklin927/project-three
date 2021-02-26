import React from "react";

function FacMap(props) {
    return (
        <div>
            {props.coll.faculty.map(prof => {
                return (<div>
                        <h3>{prof.Title} {prof.fullName}</h3>
                        <p>Office: {prof.OfficeNumber}</p>
                        <p>Phone: {prof.PhoneNumber}</p>
                        <p>Email: {prof.Email}</p>
                        </div>)
            })}
        </div>
    )
}

export default FacMap;