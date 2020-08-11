import React from "react";
import "./style.css";

function OfficialsTable(props) {
    return (
        <table className="uk-table uk-table-small uk-table-divider uk-table-responsive officials-table">
            <thead>
                <tr>
                    <th className="officials-table-head uk-text-center"></th>
                    <th className="officials-table-head uk-text-center">Name</th>
                    <th className="officials-table-head uk-text-center">Title</th>
                    <th className="officials-table-head uk-text-center">Phone</th>
                    <th className="officials-table-head uk-text-center">Email</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.officials.map((official, index) => {
                        return <tr key={index}>
                            <td className="delete-icon">
                                <button className="delete-btn" onClick={() => props.handleDeleteOfficial(index)} id={official.name}>
                                    <span uk-icon="icon: minus-circle; ratio: 1"></span>
                                </button>
                            </td>
                            <td className="uk-text-center uk-text-middle">{official.name}</td>
                            <td className="uk-text-center uk-text-middle">{official.title}</td>
                            <td className="uk-text-center uk-text-middle">{official.phone}</td>
                            <td className="uk-text-center uk-text-middle">{official.email}</td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    )
};

export default OfficialsTable;