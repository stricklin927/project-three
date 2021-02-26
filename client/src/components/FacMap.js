import React from "react";

function FacMap(props) {
    return (
        <div>
            {props.coll.faculty.map(prof => {
                return (<div>
                        <img src={prof.Image} />
                        <h4>{prof.Title} {prof.fullName}</h4>
                        <p>Office: {prof.OfficeNumber}</p>
                        <p>Phone: {prof.PhoneNumber}</p>
                        <p>Email: {prof.Email}</p>
                        </div>)
            })}
        </div>
    )
}

export default FacMap;