import React from "react";
import "./style.css";

function Note() {
  return (
    <div className="uk-alert-warning" uk-alert>
        {/* <a className="uk-alert-close" uk-close="true"></a> */}
        {/* <h4 className = "h4">Note :</h4> */}
        <p> If you do not see any results for your address, please visit the <a href ="https://www.vote.org/polling-place-locator/" target="_blank" rel="noopener noreferrer">Polling Place Locater</a> for more details.</p>
    </div>
  );
}

export default Note;
