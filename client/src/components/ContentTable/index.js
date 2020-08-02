import React from "react";
import "./style.css";

function ContentTable(props) {
    return (
        <table className="uk-table uk-table-divider uk-table-responsive">
            <thead>
                {props.children[0]}
            </thead>
            <tbody>
                {props.children.slice(1)}
            </tbody>
        </table>
    )
}

export default ContentTable;