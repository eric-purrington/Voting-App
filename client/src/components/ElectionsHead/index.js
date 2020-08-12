import React from "react";
import "./style.css";

function ElectionsHead() {
    return (
        <tr>
            <th></th>
            <th className="uk-text-center elections-table-head">Upcoming Elections</th>
            <th className="uk-text-center elections-table-head">Date</th>
        </tr>
    )
}

export default ElectionsHead;