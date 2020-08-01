import React from "react";

function ElectionsBody(props) {
    return (
        <tr>
            <td>{props.electionName}</td>
            <td>{props.electionDay}</td>
        </tr>
    )
}

export default ElectionsBody;