import axios from "axios";

export default {
    addUser: function (user) {
        console.log(user);
        return axios.post("/api/users/", user);
    },

};