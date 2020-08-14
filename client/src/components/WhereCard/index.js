import React, { useState, useEffect } from "react";
import "./style.css";
import UserAPI from "../../utils/UserAPI";
import { useAuth0 } from "@auth0/auth0-react";
import WhereTable from "../WhereTable";

function WhereCard(props) {
    const [savedPlaces, setSavedPlaces] = useState([]);
    const { user } = useAuth0();

    useEffect(() => {
        getPlaces();
    }, []);

    const getPlaces = () => {
        UserAPI.getSavedData(user.email)
            .then(res => setSavedPlaces(res.data.pollingAddress))
            .catch(err => console.log(err));
    };

    const handleDeleteClick = (index) => {
        let deleteItem = savedPlaces.filter(place => {
            return savedPlaces.indexOf(place) == index;
        });

        let deleteID = { _id: deleteItem[0]._id };

        UserAPI.deleteUserPlace(user.email, deleteID)
            .then(() => getPlaces())
            .catch(err => console.log(err));
    };

    return (
        <div>
            {
                savedPlaces.length > 0 ? (
                    <div className="uk-card uk-card-default uk-grid-collapse uk-margin dash-card uk-text-center" uk-grid="true">
                        <div className="uk-card-media-left uk-cover-container uk-width-3-5@m outside-div">
                            <WhereTable places={savedPlaces} handleDeleteClick={handleDeleteClick} />
                        </div>
                        <div className="uk-width-2-5@m">
                            <div className="uk-card-body dash-card-body">
                                <h3 className="uk-card-title dash-card-title">WHERE</h3>
                                <hr className="dash-hr" />
                                <p className="dash-card-subtitle">Important Places to Remember.</p>
                            </div>
                        </div>
                    </div>
                ) : ""
            }
        </div>
    )
};

export default WhereCard;