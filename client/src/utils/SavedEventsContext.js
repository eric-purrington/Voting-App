import React from "react";

const SavedEventsContext = React.createContext({
    savedEvents: [],
    getSavedEvents: () => undefined
});

export default SavedEventsContext;