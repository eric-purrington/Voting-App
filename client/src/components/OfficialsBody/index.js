import React from "react";

function OfficialsBody(props) {
    return (
        <tr>
            <td>{props.title}</td>
            <td>{props.name}</td>
            <td>{props.party}</td>
            <td>{props.phone}</td>
            <td>{props.email}</td>
        </tr>
    )
}

export default OfficialsBody;