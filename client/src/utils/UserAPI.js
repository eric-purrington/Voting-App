import axios from "axios";

export default {

    addUser: function (user) {
        return axios.post("/api/users/", user);
    },

    updateUser: function (userID) {
        return axios.put("/api/users/" + userID);
    },
    
    loginUser: function(user) {
        return axios.post("/login", user);
    }
};