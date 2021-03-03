import React from "react";
import Table from 'react-bootstrap/Table';
import '../FacMap.css';

function FacMap(props) {
    return (
        <div>
            {props.coll.faculty.map(prof => {
                return (
                        <Table striped bordered hover responsive="sm">
                            <tbody>
                                <tr>
                                <th scope="row" id="pics"><img src={prof.Image} /></th>
                                <td id="nameTitle">{prof.Title} {prof.fullName}</td>
                                <td id="office">{prof.OfficeNumber}, <br></br> {prof.PhoneNumber}</td>
                                <td id="email">{prof.Email} </td>
                                </tr>
                            </tbody>
                        </Table>
                        )
            })}
        </div>
    )
}

export default FacMap;