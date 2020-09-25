import React from "react";
import "./style.css";

function ContestsHead() {
    return (
        <tr>
            {/* <th></th> */}
            <th className="uk-text-center elections-table-head">Candidate</th>
            <th className="uk-text-center elections-table-head">Party Affiliation</th>
        </tr>
    )
}

export default ContestsHead;