import React from "react";

function FacMap(props) {
    return (
        <div>
            {props.coll.faculty.map(prof => {
                return (<div>
                            <table class="table table-striped">
                                <tbody>
                                    <tr>
                                    <th scope="row"><img src={prof.Image} /></th>
                                    <td>{prof.Title} {prof.fullName}</td>
                                    <td>{prof.OfficeNumber} <br></br> {prof.PhoneNumber}</td>
                                    <td>{prof.Email} </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>)
            })}
        </div>
    )
}

export default FacMap;