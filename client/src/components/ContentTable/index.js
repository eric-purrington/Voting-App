import React from "react";

function ContentTable(props) {
    return (
        <table className="uk-table">
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