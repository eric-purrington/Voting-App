import React from "react";

const UserContext = React.createContext({
  address: "",
  zip: "",
  handleZipChange: () => {}
});

export default UserContext;