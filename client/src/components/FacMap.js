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
                                <th scope="row" width="50"><img src={prof.Image} /></th>
                                <td>{prof.Title} {prof.fullName}</td>
                                <td>{prof.OfficeNumber}, <br></br> {prof.PhoneNumber}</td>
                                <td>{prof.Email} </td>
                                </tr>
                            </tbody>
                        </Table>
                        )
            })}
        </div>
    )
}

export default FacMap;