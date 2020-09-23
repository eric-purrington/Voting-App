import React from "react";
import "./style.css";

function ContestsBody(props) {
    return (
        <tr>
            {/* <td>
                <span
                    onClick={() => props.handleAddEvent(props.index)} className="addDel-icon" uk-icon={props.icon} uk-toggle="target: #add-event-modal">
                </span>
            </td> */}
            <td className="elections-table-item uk-text-center">{props.candidate}</td>
            <td className="elections-table-item uk-text-center">{props.party}</td>
        </tr>
    )
}

export default ContestsBody;