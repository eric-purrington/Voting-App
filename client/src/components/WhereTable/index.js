import React from "react";
import "./style.css";

function WhereTable(props) {
    return (
        <table className="uk-table uk-table-small uk-table-divider uk-table-responsive officials-table">
            <thead>
                <tr>
                    <th className="officials-table-head uk-text-center"></th>
                    <th className="officials-table-head uk-text-center">Name</th>
                    <th className="officials-table-head uk-text-center">Address</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.places.map((place, index) => {
                        return <tr key={index}>
                            <td className="delete-icon delete-icon-td">
                                <button className="delete-btn" onClick={() => props.handleDeleteClick(index)} id={place.name}>
                                    <span uk-icon="icon: minus-circle; ratio: 1"></span>
                                </button>
                            </td>
                            <td className="uk-text-center uk-text-middle where-td">{place.name}</td>
                            <td className="uk-text-center uk-text-middle where-td">{place.address}</td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    )
};

export default WhereTable;