import React from "react";
import "./style.css";

function Note() {
  return (
    <div className = "noteContainer">
        <h4 className = "h4">Note :</h4>
            <div className = "noteAlert">
                If you do not see any results for your address, please visit  
                <a href ="https://www.vote.org/polling-place-locator/">Vote Location Locater</a> for more details.
            </div>
    </div>
  );
}

export default Note;
