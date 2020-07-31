import React from "react";

function TableBody(props) {
    return (
        <tr>
            <td>{props.electionName}</td>
            <td>{props.electionDay}</td>
        </tr>
    )
}

export default TableBody;