import React from "react";
import "./style.css";

function ElectionsBody(props) {
    return (
        <tr>
            <td className="elections-table-item">{props.electionName}</td>
            <td className="elections-table-item">{props.electionDay}</td>
        </tr>
    )
}

export default ElectionsBody;