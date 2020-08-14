import React, { useState, useEffect } from "react";
import "./style.css";
import UserAPI from "../../utils/UserAPI";
import OfficialsTable from "../../components/OfficialsTable";
import { useAuth0 } from "@auth0/auth0-react";

function WhoCard(props) {
    const [savedOfficials, setSavedOfficials] = useState([]);
    const { user } = useAuth0();

    useEffect(() => {
        getOfficials();
    }, []);

    const getOfficials = () => {
        UserAPI.getSavedData(user.email)
            .then(res => {
                setSavedOfficials(res.data.repDetails)
            })
            .catch(err => console.log(err));
    };

    const handleDeleteOfficial = (index) => {

        let deleteItem = savedOfficials.filter(official => {
            return savedOfficials.indexOf(official) == index;
        });

        let deleteID = { _id: deleteItem[0]._id };

        UserAPI.deleteUserOfficial(user.email, deleteID)
            .then(() => getOfficials())
            .catch(err => console.log(err));
    };

    return (
        <div>
            {
                savedOfficials.length > 0 ? (
                    <div className="uk-card uk-card-default uk-grid-collapse uk-margin dash-card uk-text-center" uk-grid="true">
                        <div className="uk-flex-last@s uk-card-media-right uk-cover-container uk-width-3-5@m outside-div">
                            <OfficialsTable officials={savedOfficials} handleDeleteOfficial={handleDeleteOfficial} />
                        </div>
                        <div className="uk-width-2-5@m">
                            <div className="uk-card-body uk-text-center dash-card-body">
                                <h3 className="uk-card-title dash-card-title">Who</h3>
                                <hr className="dash-hr" />
                                <p className="dash-card-subtitle">Important People to Remember.</p>
                            </div>
                        </div>
                    </div>
                ) : ""
            }
        </div>
    )
};

export default WhoCard;