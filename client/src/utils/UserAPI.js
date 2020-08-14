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

    addOfficial: function (email, body) {
        return axios.put("/api/users/officials/" + email, body);
    },

    addPollingSite: function (email, body) {
        return axios.put("/api/users/places/" + email, body);
    },

    getSavedData: function (email) {
        return axios.get("/api/users/" + email);
    },

    deleteUserEvent: function (email, body) {
        return axios.put("/api/users/events/delete/" + email, body);
    },

    deleteUserOfficial: function (email, body) {
        return axios.put("/api/users/officials/delete/" + email, body);
    },

    deleteUserPlace: function (email, body) {
        return axios.put("/api/users/places/delete/" + email, body);
    },

};