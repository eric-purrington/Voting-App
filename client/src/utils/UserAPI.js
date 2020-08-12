import axios from "axios";

export default {

    addUser: function (user) {
        return axios.post("/api/users/", user);
    },

    findUser: function (email) {
        return axios.get("/api/users/" + email)
    },

    updateUser: function (userID) {
        return axios.put("/api/users/" + userID);
    },

    loginUser: function (user) {
        return axios.post("/login", user);
    },

    addUserEvent: function (email, body) {
        return axios.put("/api/users/events/" + email, body);
    },

    addOfficial: function (userID, body) {
        return axios.put("/api/users/officials/" + userID, body);
    },

    addPollingSite: function (userID, body) {
        return axios.put("/api/users/places/" + userID, body);
    },

    getSavedData: function (email) {
        return axios.get("/api/users/" + email);
    },

    deleteUserEvent: function (userID, body) {
        return axios.put("/api/users/events/delete/" + userID, body);
    },

    deleteUserOfficial: function (userID, body) {
        return axios.put("/api/users/officials/delete/" + userID, body);
    },

};