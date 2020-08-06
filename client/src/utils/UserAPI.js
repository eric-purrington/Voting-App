import axios from "axios";

export default {

    addUser: function (user) {
        return axios.post("/api/users/", user);
    },

    updateUser: function (userID) {
        return axios.put("/api/users/" + userID);
    },

    loginUser: function (user) {
        return axios.post("/login", user);
    },

    addUserEvent: function (userID, body) {
        return axios.put("/api/users/events/" + userID, body);
    },

    addOfficial: function (userID, body) {
        return axios.put("/api/users/officials/" + userID, body);
    },

    getSavedData: function (userID) {
        return axios.get("/api/users/" + userID);
    }

};