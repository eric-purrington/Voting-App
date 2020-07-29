import React from "react";

const UserContext = React.createContext({
  userID: "",
  address: "",
  zip: "",
  handleZipChange: () => {}
});

export default UserContext;