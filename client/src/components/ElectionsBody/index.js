import React from "react";
import "./style.css";

function ElectionsBody(props) {
    return (
        <tr>
            <td>
                <span
                    onClick={() => props.handleAddEvent(props.index)} className="addDel-icon" uk-icon={props.icon} uk-toggle="target: #add-event-modal">
                </span>
            </td>
            <td className="elections-table-item">{props.electionName}</td>
            <td className="elections-table-item">{props.electionDay}</td>
        </tr>
    )
}

export default ElectionsBody;