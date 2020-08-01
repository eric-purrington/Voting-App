import axios from "axios";

export default {
    addUser: function (user) {
        return axios.post("/api/users/", user);
    },

};