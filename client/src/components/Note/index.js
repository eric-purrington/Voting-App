import React from "react";
import "./style.css";

function Note() {
  return (
    <div class="uk-alert-warning" uk-alert>
      <a class="uk-alert-close" uk-close></a>
        <h4 className = "h4">Note :</h4>
        <p> If you do not see any results for your address, please visit  
        <a href ="https://www.vote.org/polling-place-locator/">Vote Location Locater</a> for more details.</p>
    </div>
  );
}

export default Note;
